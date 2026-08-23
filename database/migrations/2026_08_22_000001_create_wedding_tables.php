<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // 1. Invitations Table
        Schema::create('invitations', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('title');
            $table->text('quote_arabic')->nullable();
            $table->text('quote_translation')->nullable();
            $table->string('quote_source')->nullable();
            $table->text('opening_text')->nullable();
            $table->text('closing_text')->nullable();
            $table->dateTime('wedding_date');
            $table->string('music_title')->nullable();
            $table->string('music_artist')->nullable();
            $table->string('music_url')->nullable();
            $table->string('hero_image')->nullable();
            $table->string('cover_image')->nullable();
            $table->string('og_image')->nullable();
            $table->string('background_video_url')->nullable();
            $table->json('theme_settings')->nullable();
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        // 2. Couples Table
        Schema::create('couples', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invitation_id')->constrained()->cascadeOnDelete();
            $table->enum('role', ['groom', 'bride']);
            $table->string('full_name');
            $table->string('nickname');
            $table->string('father_name')->nullable();
            $table->string('mother_name')->nullable();
            $table->string('child_order_text')->nullable();
            $table->string('instagram')->nullable();
            $table->string('photo_url')->nullable();
            $table->text('bio')->nullable();
            $table->timestamps();
        });

        // 3. Events Table
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invitation_id')->constrained()->cascadeOnDelete();
            $table->string('title');
            $table->date('date');
            $table->string('start_time');
            $table->string('end_time')->nullable();
            $table->string('venue_name');
            $table->string('venue_subname')->nullable();
            $table->text('address');
            $table->text('maps_url')->nullable();
            $table->text('calendar_google_url')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 4. Love Stories Table
        Schema::create('love_stories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invitation_id')->constrained()->cascadeOnDelete();
            $table->string('year_or_date');
            $table->string('title');
            $table->text('story');
            $table->string('image_url')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 5. Galleries Table
        Schema::create('galleries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invitation_id')->constrained()->cascadeOnDelete();
            $table->string('image_url');
            $table->string('caption')->nullable();
            $table->string('orientation')->default('portrait');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 6. Gift Accounts Table
        Schema::create('gift_accounts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invitation_id')->constrained()->cascadeOnDelete();
            $table->string('bank_name');
            $table->string('account_number')->nullable();
            $table->string('account_holder')->nullable();
            $table->string('qr_code_url')->nullable();
            $table->text('recipient_address')->nullable();
            $table->string('notes')->nullable();
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        // 7. RSVPs Table
        Schema::create('rsvps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invitation_id')->constrained()->cascadeOnDelete();
            $table->string('guest_name');
            $table->enum('attendance_status', ['attending', 'declined', 'tentative']);
            $table->integer('guest_count')->default(1);
            $table->text('message')->nullable();
            $table->string('ip_address')->nullable();
            $table->timestamps();
        });

        // 8. Wishes Table
        Schema::create('wishes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('invitation_id')->constrained()->cascadeOnDelete();
            $table->string('sender_name');
            $table->string('relationship')->nullable();
            $table->text('message');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('wishes');
        Schema::dropIfExists('rsvps');
        Schema::dropIfExists('gift_accounts');
        Schema::dropIfExists('galleries');
        Schema::dropIfExists('love_stories');
        Schema::dropIfExists('events');
        Schema::dropIfExists('couples');
        Schema::dropIfExists('invitations');
    }
};
