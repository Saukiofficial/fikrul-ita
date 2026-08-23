<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use App\Models\Rsvp;
use App\Models\Wish;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class RsvpController extends Controller
{
    /**
     * Store a newly created RSVP.
     */
    public function store(Request $request, string $slug): RedirectResponse
    {
        $invitation = Invitation::where('slug', $slug)->firstOrFail();

        $validated = $request->validate([
            'guest_name' => ['required', 'string', 'max:150'],
            'attendance_status' => ['required', 'in:attending,declined,tentative'],
            'guest_count' => ['required', 'integer', 'min:1', 'max:10'],
            'message' => ['nullable', 'string', 'max:1000'],
        ]);

        $rsvp = $invitation->rsvps()->create([
            'guest_name' => strip_tags($validated['guest_name']),
            'attendance_status' => $validated['attendance_status'],
            'guest_count' => $validated['attendance_status'] === 'attending' ? (int) $validated['guest_count'] : 0,
            'message' => $validated['message'] ? strip_tags($validated['message']) : null,
            'ip_address' => $request->ip(),
        ]);

        // If a message was entered in RSVP, automatically add to guest wishes feed
        if (!empty($validated['message'])) {
            $invitation->wishes()->create([
                'sender_name' => strip_tags($validated['guest_name']),
                'relationship' => $validated['attendance_status'] === 'attending' ? 'Hadir di Acara' : 'Mendoakan dari Jauh',
                'message' => strip_tags($validated['message']),
            ]);
        }

        return back()->with('success', 'Konfirmasi kehadiran dan ucapan Anda berhasil dikirim. Terima kasih!');
    }
}
