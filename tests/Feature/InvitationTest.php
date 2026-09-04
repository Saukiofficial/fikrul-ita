<?php

namespace Tests\Feature;

use App\Models\Invitation;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class InvitationTest extends TestCase
{
    use DatabaseTransactions;
    public function test_root_redirects_to_default_invitation(): void
    {
        $response = $this->get('/');
        $response->assertRedirect('/fikrul-puspita');
    }

    public function test_invitation_page_renders_with_inertia(): void
    {
        $response = $this->get('/fikrul-puspita');
        $response->assertStatus(200);
    }

    public function test_invitation_with_personalized_guest_name(): void
    {
        $response = $this->get('/fikrul-puspita?to=Bapak+Hendra+Wijaya');
        $response->assertStatus(200);
    }

    public function test_guest_can_submit_rsvp(): void
    {
        $response = $this->post('/fikrul-puspita/rsvp', [
            'guest_name' => 'Bapak Budi Santoso',
            'attendance_status' => 'attending',
            'guest_count' => 2,
            'message' => 'Selamat untuk kedua mempelai, semoga langgeng selamanya!',
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('rsvps', [
            'guest_name' => 'Bapak Budi Santoso',
            'attendance_status' => 'attending',
            'guest_count' => 2,
        ]);
        $this->assertDatabaseHas('wishes', [
            'sender_name' => 'Bapak Budi Santoso',
        ]);
    }

    public function test_guest_can_submit_wish_only(): void
    {
        $response = $this->post('/fikrul-puspita/wishes', [
            'sender_name' => 'Rina Melati',
            'relationship' => 'Sahabat SMA',
            'message' => 'Turut berbahagia untuk kalian berdua!',
        ]);

        $response->assertRedirect();
        $this->assertDatabaseHas('wishes', [
            'sender_name' => 'Rina Melati',
            'message' => 'Turut berbahagia untuk kalian berdua!',
        ]);
    }

    public function test_mobile_bottom_navigation_uses_six_equal_columns_and_safe_area(): void
    {
        $navigation = file_get_contents(resource_path('js/Components/Wedding/BottomNavigation.jsx'));
        $page = file_get_contents(resource_path('js/Pages/Wedding/Show.jsx'));

        $this->assertStringContainsString('grid grid-cols-6', $navigation);
        $this->assertStringContainsString('min-w-0 min-h-11', $navigation);
        $this->assertStringContainsString("bottom-[calc(0.75rem+env(safe-area-inset-bottom))]", $navigation);
        $this->assertStringNotContainsString('scale-105', $navigation);
        $this->assertStringContainsString('pb-28 sm:pb-24', $page);
    }
}
