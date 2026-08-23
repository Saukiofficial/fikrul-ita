<?php

namespace Database\Seeders;

use App\Models\Couple;
use App\Models\Event;
use App\Models\Gallery;
use App\Models\GiftAccount;
use App\Models\Invitation;
use App\Models\LoveStory;
use App\Models\Rsvp;
use App\Models\Wish;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create Default Master Invitation (Fikrul & Puspita)
        $invitation = Invitation::create([
            'slug' => 'fikrul-puspita',
            'title' => 'The Wedding Celebration of Fikrul & Puspita',
            'quote_arabic' => 'وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
            'quote_translation' => 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.',
            'quote_source' => 'QS. Ar-Rum : 21',
            'opening_text' => 'Dengan penuh rasa syukur dan memohon rahmat serta ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i sekalian untuk hadir dan memberikan doa restu pada hari bahagia pernikahan kami.',
            'closing_text' => 'Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan melimpahkan doa restu bagi langkah awal kehidupan rumah tangga kami.',
            'wedding_date' => '2026-09-16 07:30:00',
            'music_title' => 'Canon in D (Orchestral Strings & Classical Piano)',
            'music_artist' => 'Fikrul & Puspita Special Symphony',
            'music_url' => '/musik/musik.mp3',
            'hero_image' => '/images/wedding/Hero-Section.jpeg',
            'cover_image' => '/images/wedding/cover.jpeg',
            'og_image' => '/images/wedding/Hero-Section.jpeg',
            'background_video_url' => '/stream/video/background.mp4',
            'theme_settings' => [
                'primary_theme' => 'classic-noni-belanda',
                'palette' => 'ivory-gold-deepbrown',
                'font_display' => 'Cormorant Garamond',
            ],
            'is_active' => true,
        ]);

        // Also create fikrul-ita alias for backwards compatibility
        Invitation::create([
            'slug' => 'fikrul-ita',
            'title' => 'The Wedding Celebration of Fikrul & Puspita',
            'quote_arabic' => 'وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعELَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
            'quote_translation' => 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.',
            'quote_source' => 'QS. Ar-Rum : 21',
            'opening_text' => 'Dengan penuh rasa syukur dan memohon rahmat serta ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i sekalian untuk hadir dan memberikan doa restu pada hari bahagia pernikahan kami.',
            'closing_text' => 'Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan melimpahkan doa restu bagi kami.',
            'wedding_date' => '2026-09-16 07:30:00',
            'music_title' => 'Canon in D (Orchestral Strings & Classical Piano)',
            'music_artist' => 'Fikrul & Puspita Special Symphony',
            'music_url' => '/musik/musik.mp3',
            'hero_image' => '/images/wedding/Hero-Section.jpeg',
            'cover_image' => '/images/wedding/cover.jpeg',
            'og_image' => '/images/wedding/Hero-Section.jpeg',
            'background_video_url' => '/stream/video/background.mp4',
            'is_active' => true,
        ]);

        // Also create ahmad-siti alias/invitation for backwards compatibility
        Invitation::create([
            'slug' => 'ahmad-siti',
            'title' => 'The Wedding Celebration of Fikrul & Puspita',
            'quote_arabic' => 'وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
            'quote_translation' => 'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.',
            'quote_source' => 'QS. Ar-Rum : 21',
            'opening_text' => 'Dengan penuh rasa syukur dan memohon rahmat serta ridho Allah SWT, kami bermaksud mengundang Bapak/Ibu/Saudara/i sekalian untuk hadir dan memberikan doa restu pada hari bahagia pernikahan kami.',
            'closing_text' => 'Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan melimpahkan doa restu bagi kami.',
            'wedding_date' => '2026-09-16 07:30:00',
            'music_title' => 'Canon in D (Orchestral Strings & Classical Piano)',
            'music_artist' => 'Fikrul & Puspita Special Symphony',
            'music_url' => '/musik/musik.mp3',
            'hero_image' => '/images/wedding/hero.jpg',
            'cover_image' => '/images/wedding/cover.jpeg',
            'og_image' => '/images/wedding/hero.jpg',
            'background_video_url' => '/stream/video/background.mp4',
            'is_active' => true,
        ]);

        // 2. Create Groom & Bride for Fikrul & Puspita (for all active invitations)
        foreach ([$invitation->id, 2, 3] as $invId) {
            Couple::create([
                'invitation_id' => $invId,
                'role' => 'groom',
                'full_name' => 'Fikrul Anwar',
                'nickname' => 'Fikrul',
                'father_name' => null,
                'mother_name' => null,
                'child_order_text' => null,
                'instagram' => 'fikrul.anwar',
                'photo_url' => '/images/wedding/groom.jpg',
                'bio' => null,
            ]);

            Couple::create([
                'invitation_id' => $invId,
                'role' => 'bride',
                'full_name' => 'Ita Puspita Sari',
                'nickname' => 'Puspita',
                'father_name' => null,
                'mother_name' => null,
                'child_order_text' => null,
                'instagram' => 'ita.puspitasari',
                'photo_url' => '/images/wedding/bride.jpg',
                'bio' => null,
            ]);

            // 3. Create Events (Akad & Resepsi)
            Event::create([
                'invitation_id' => $invId,
                'title' => 'Akad Nikah',
                'date' => '2026-09-16',
                'start_time' => '07.30 WIB',
                'end_time' => '09.00 WIB',
                'venue_name' => 'Kediaman Mempelai Wanita',
                'venue_subname' => 'Kombung Barat, Ellak Daya',
                'address' => 'Kombung Barat, Ellak Daya, Kec. Lenteng, Kab. Sumenep, Madura, Jawa Timur',
                'maps_url' => 'https://www.google.com/maps?q=-7.0078625,113.7612603',
                'calendar_google_url' => 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Akad+Nikah+Fikrul+%26+Puspita&dates=20260916T003000Z/20260916T020000Z&details=Akad+Nikah+Pernikahan+Fikrul+dan+Puspita&location=Kombung+Barat+Ellak+Daya+Kec.+Lenteng+Kab.+Sumenep',
                'sort_order' => 1,
            ]);

            Event::create([
                'invitation_id' => $invId,
                'title' => 'Resepsi Pernikahan',
                'date' => '2026-09-16',
                'start_time' => '19.00 WIB',
                'end_time' => 'Selesai',
                'venue_name' => 'Kediaman Mempelai',
                'venue_subname' => 'Kombung Barat, Ellak Daya',
                'address' => 'Kombung Barat, Ellak Daya, Kec. Lenteng, Kab. Sumenep, Madura, Jawa Timur',
                'maps_url' => 'https://www.google.com/maps?q=-7.0078625,113.7612603',
                'calendar_google_url' => 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=Resepsi+Pernikahan+Fikrul+%26+Puspita&dates=20260916T120000Z/20260916T150000Z&details=Resepsi+Pernikahan+Fikrul+dan+Puspita&location=Kombung+Barat+Ellak+Daya+Kec.+Lenteng+Kab.+Sumenep',
                'sort_order' => 2,
            ]);

            // 4. Create Love Stories
            LoveStory::create([
                'invitation_id' => $invId,
                'year_or_date' => '2020',
                'title' => 'Pertemuan Pertama',
                'story' => 'Garis takdir mempertemukan kami pada tahun 2020 di Komunitas Kesenian Lenteng. Saat itu, kami hanyalah rekan sesama anggota, tanpa menyadari bahwa ruang seni tersebut adalah awal dari rajutan kisah panjang yang sedang Tuhan persiapkan.',
                'image_url' => '/images/wedding/wedding-01.jpg',
                'sort_order' => 1,
            ]);

            LoveStory::create([
                'invitation_id' => $invId,
                'year_or_date' => '2022',
                'title' => 'Menenun Cinta & Menguatkan Niat',
                'story' => 'Pada tahun 2022, komunikasi yang intens membuat cinta kami tumbuh mekar. Meski saat itu langkah studi membentang jarak 204 km antara Jember dan Malang. Jarak itu menjadi saksi debar rindu yang diperjuangkan lewat kereta, bus, hingga cerita klasik motor tua C70 yang kerap mogok di jalan. Kota-kota yang kami singgahi dan terjalnya perjalanan itulah yang merekatkan komitmen serta mematangkan cinta kami hingga kini.',
                'image_url' => '/images/wedding/wedding-05.jpg',
                'sort_order' => 2,
            ]);

            LoveStory::create([
                'invitation_id' => $invId,
                'year_or_date' => '2025 – 2026',
                'title' => 'Janji Suci Menuju Keabadian',
                'story' => 'Setelah kembali ke tanah kelahiran, kami memantapkan niat lewat ikatan tunangan di awal tahun 2025. Kini, perjalanan panjang itu telah menemui muaranya. Tepat pada 16 September 2026, kami siap mengikat janji suci di hadapan Tuhan dan keluarga, melangkah bersama menuju keabadian.',
                'image_url' => '/images/wedding/wedding-07.jpg',
                'sort_order' => 3,
            ]);

            // 5. Create Editorial Photo Galleries with All Real Photos
            $galleryImages = [
                [
                    'image_url' => '/images/wedding/wedding-08.jpg',
                    'caption' => 'Keanggunan busana vintage berpadu sutra lembut',
                    'orientation' => 'landscape',
                ],
                [
                    'image_url' => '/images/wedding/wedding-01.jpg',
                    'caption' => 'Keheningan yang penuh doa dan kepastian',
                    'orientation' => 'portrait',
                ],
                [
                    'image_url' => '/images/wedding/wedding-03.jpg',
                    'caption' => 'Pesona anggun sang mempelai wanita',
                    'orientation' => 'portrait',
                ],
                [
                    'image_url' => '/images/wedding/wedding-02.jpg',
                    'caption' => 'Karisma tenang sang mempelai pria',
                    'orientation' => 'portrait',
                ],
                [
                    'image_url' => '/images/wedding/wedding-05.jpg',
                    'caption' => 'Kuntum mawar merah dan senyuman penuh makna',
                    'orientation' => 'portrait',
                ],
                [
                    'image_url' => '/images/wedding/wedding-06.jpeg',
                    'caption' => 'Dua hati yang saling bersandar dalam kehangatan',
                    'orientation' => 'landscape',
                ],
                [
                    'image_url' => '/images/wedding/wedding-07.jpg',
                    'caption' => 'Harmoni langkah dan tatapan masa depan',
                    'orientation' => 'portrait',
                ],
                [
                    'image_url' => '/images/wedding/wedding-04.jpg',
                    'caption' => 'Cahaya lentera saksi ikrar janji suci',
                    'orientation' => 'portrait',
                ],
                [
                    'image_url' => '/images/wedding/wedding-09.jpg',
                    'caption' => 'Senyum penuh syukur menyambut hari bahagia',
                    'orientation' => 'portrait',
                ],
            ];

            foreach ($galleryImages as $index => $item) {
                Gallery::create([
                    'invitation_id' => $invId,
                    'image_url' => $item['image_url'],
                    'caption' => $item['caption'],
                    'orientation' => $item['orientation'],
                    'sort_order' => $index + 1,
                ]);
            }

            // 6. Create Gift Accounts (Digital Angpao & Physical Address)
            GiftAccount::create([
                'invitation_id' => $invId,
                'bank_name' => 'Bank Mandiri',
                'account_number' => '1400024615347',
                'account_holder' => 'FIKRUL ANWAR',
                'qr_code_url' => null,
                'notes' => 'Transfer Rekening Digital Mempelai',
                'sort_order' => 1,
            ]);

            GiftAccount::create([
                'invitation_id' => $invId,
                'bank_name' => 'Kirim Kado Fisik (Alamat Kediaman)',
                'account_number' => null,
                'account_holder' => 'Kediaman Mempelai (Fikrul & Puspita)',
                'recipient_address' => 'Kombung Barat, Ellak Daya, Kec. Lenteng, Kab. Sumenep, Madura, Jawa Timur 69461 (Penerima: Fikrul & Puspita)',
                'notes' => 'Konfirmasi pengiriman kado dapat melalui WhatsApp',
                'sort_order' => 2,
            ]);
        }

        // 7. No dummy wishes or RSVPs - Live realtime guest data only
    }
}
