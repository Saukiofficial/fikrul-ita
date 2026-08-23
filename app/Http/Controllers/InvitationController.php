<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class InvitationController extends Controller
{
    /**
     * Display the specified wedding invitation.
     */
    public function show(string $slug, Request $request): Response
    {
        $invitation = Invitation::where('slug', $slug)
            ->where('is_active', true)
            ->with([
                'couples',
                'events',
                'loveStories',
                'galleries',
                'giftAccounts',
                'wishes' => function ($query) {
                    $query->latest()->take(50);
                },
            ])
            ->firstOrFail();

        // Sanitize and decode personalized guest name (e.g., ?to=Sauki or ?nama=Sauki)
        $rawGuest = $request->query('to') ?? $request->query('nama') ?? $request->query('name') ?? $request->query('u') ?? '';
        $guestName = $rawGuest ? strip_tags(trim(urldecode($rawGuest))) : null;

        // Calculate attendance summary
        $attendingCount = $invitation->rsvps()->where('attendance_status', 'attending')->sum('guest_count');
        $totalRsvps = $invitation->rsvps()->count();

        return Inertia::render('Wedding/Show', [
            'invitation' => $invitation,
            'guestName' => $guestName,
            'stats' => [
                'attendingCount' => (int) $attendingCount,
                'totalWishes' => $invitation->wishes()->count(),
            ],
            'meta' => [
                'title' => $invitation->title,
                'description' => "Undangan Pernikahan {$invitation->groom?->nickname} & {$invitation->bride?->nickname} — " . $invitation->wedding_date->translatedFormat('d F Y'),
                'ogImage' => $invitation->og_image ?? $invitation->cover_image,
                'url' => url()->current() . ($guestName ? '?to=' . urlencode($guestName) : ''),
            ],
        ]);
    }
}
