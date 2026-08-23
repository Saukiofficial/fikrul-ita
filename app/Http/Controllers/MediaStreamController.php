<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;

class MediaStreamController extends Controller
{
    /**
     * Stream video with full HTTP 206 Partial Content Range support for iOS Safari & Android.
     */
    public function streamVideo(Request $request, string $filename = 'background.mp4'): StreamedResponse
    {
        $safeFilename = basename($filename);
        $fullPath = public_path('videos/wedding/' . $safeFilename);

        if (!file_exists($fullPath)) {
            $fullPath = public_path('videos/' . $safeFilename);
            if (!file_exists($fullPath)) {
                abort(404, 'Video not found');
            }
        }

        $fileSize = filesize($fullPath);
        $start = 0;
        $end = $fileSize - 1;
        $status = 200;

        $headers = [
            'Content-Type' => 'video/mp4',
            'Accept-Ranges' => 'bytes',
            'Cache-Control' => 'public, max-age=86400',
        ];

        $rangeHeader = $request->header('Range') ?? $request->server('HTTP_RANGE');

        if ($rangeHeader && preg_match('/bytes=(\d+)-(\d+)?/', $rangeHeader, $matches)) {
            $start = (int)$matches[1];
            if (!empty($matches[2])) {
                $end = min((int)$matches[2], $fileSize - 1);
            }
            $status = 206;
            $headers['Content-Range'] = "bytes {$start}-{$end}/{$fileSize}";
        }

        $length = $end - $start + 1;
        $headers['Content-Length'] = $length;

        $file = fopen($fullPath, 'rb');

        return response()->stream(function () use ($file, $start, $length) {
            fseek($file, $start);
            $buffer = 1024 * 64; // 64KB buffer
            $remaining = $length;

            while ($remaining > 0 && !feof($file)) {
                $read = min($buffer, $remaining);
                $data = fread($file, $read);
                echo $data;
                flush();
                $remaining -= strlen($data);
            }
            fclose($file);
        }, $status, $headers);
    }
}
