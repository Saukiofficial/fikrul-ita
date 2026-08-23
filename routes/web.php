<?php

use App\Http\Controllers\InvitationController;
use App\Http\Controllers\RsvpController;
use App\Http\Controllers\WishController;
use Illuminate\Support\Facades\Route;

// Redirect root to default featured luxury invitation
Route::get('/', function () {
    return redirect('/fikrul-puspita');
});

// Video streaming endpoint with Byte Range (206) support for iOS & mobile devices
Route::get('/stream/video/{filename?}', [\App\Http\Controllers\MediaStreamController::class, 'streamVideo'])->name('media.video.stream');

// Wedding invitation routes
Route::get('/{slug}', [InvitationController::class, 'show'])->name('invitation.show');
Route::post('/{slug}/rsvp', [RsvpController::class, 'store'])->name('invitation.rsvp');
Route::post('/{slug}/wishes', [WishController::class, 'store'])->name('invitation.wishes');

