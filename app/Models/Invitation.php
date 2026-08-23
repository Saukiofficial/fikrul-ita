<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Invitation extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $casts = [
        'wedding_date' => 'datetime',
        'theme_settings' => 'array',
        'is_active' => 'boolean',
    ];

    public function couples(): HasMany
    {
        return $this->hasMany(Couple::class);
    }

    public function groom()
    {
        return $this->hasOne(Couple::class)->where('role', 'groom');
    }

    public function bride()
    {
        return $this->hasOne(Couple::class)->where('role', 'bride');
    }

    public function events(): HasMany
    {
        return $this->hasMany(Event::class)->orderBy('sort_order');
    }

    public function loveStories(): HasMany
    {
        return $this->hasMany(LoveStory::class)->orderBy('sort_order');
    }

    public function galleries(): HasMany
    {
        return $this->hasMany(Gallery::class)->orderBy('sort_order');
    }

    public function giftAccounts(): HasMany
    {
        return $this->hasMany(GiftAccount::class)->orderBy('sort_order');
    }

    public function rsvps(): HasMany
    {
        return $this->hasMany(Rsvp::class)->latest();
    }

    public function wishes(): HasMany
    {
        return $this->hasMany(Wish::class)->latest();
    }
}
