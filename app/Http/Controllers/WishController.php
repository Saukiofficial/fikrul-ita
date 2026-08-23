<?php

namespace App\Http\Controllers;

use App\Models\Invitation;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class WishController extends Controller
{
    /**
     * Store a newly created guest wish/prayer.
     */
    public function store(Request $request, string $slug): RedirectResponse
    {
        $invitation = Invitation::where('slug', $slug)->firstOrFail();

        $validated = $request->validate([
            'sender_name' => ['required', 'string', 'max:150'],
            'relationship' => ['nullable', 'string', 'max:100'],
            'message' => ['required', 'string', 'max:1000'],
        ]);

        $invitation->wishes()->create([
            'sender_name' => strip_tags($validated['sender_name']),
            'relationship' => $validated['relationship'] ? strip_tags($validated['relationship']) : null,
            'message' => strip_tags($validated['message']),
        ]);

        return back()->with('success', 'Ucapan dan doa tulus Anda telah berhasil dikirimkan.');
    }
}
