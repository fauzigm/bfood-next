import Container from '@/components/Container'
import React from 'react'

const PrivacyPage = () => {
  return (
    <Container className="max-w-3xl sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Kebijakan Privasi &#40;Privacy Policy&#41;</h1>
      <div className="space-y-4">
        <section>
          <p>
            BFOOD Catering App Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, membagikan, dan melindungi informasi pribadi Anda saat menggunakan Platform kami, termasuk pemesanan menu catering. Dengan menggunakan Platform, Anda menyetujui praktik yang dijelaskan di sini. Jika Anda tidak setuju, jangan gunakan Platform kami.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Informasi yang Kami Kumpulkan</h2>
          <p>Kami mengumpulkan informasi untuk menyediakan layanan yang lebih baik. Jenis informasi meliputi:</p>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">
              <span className="font-semibold">Informasi Pribadi:</span> Syarat ini mengatur penggunaan Platform kami untuk memesan layanan catering, termasuk menu, paket, dan pengiriman.</li>
            <li className="list-disc ml-10">
              <span className="font-semibold">Informasi Teknis:</span> Alamat IP, jenis browser, perangkat, lokasi geografis &#40;dari IP&#41;, dan pola penggunaan &#40;misalnya, halaman yang dilihat&#41; melalui cookies dan log server.</li>
            <li className="list-disc ml-10">
              <span className="font-semibold">Informasi Transaksi:</span> Detail pemesanan, seperti item yang dibeli, jumlah, harga, dan metode pembayaran &#40;tanpa menyimpan data kartu kredit penuh&#41;.</li>
            <li className="list-disc ml-10">
              <span className="font-semibold">Informasi dari Pihak Ketiga:</span> Data dari Clerk &#40;untuk autentikasi&#41; atau Sanity &#40;untuk data menu&#41;.</li>
          </ul>
          <p>Kami tidak mengumpulkan data sensitif seperti nomor kartu kredit penuh &#40;hanya token dari gateway pembayaran&#41;.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Cara Kami Menggunakan Informasi</h2>
          <p>Kami menggunakan informasi untuk:</p>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">Memproses pemesanan dan pengiriman.</li>
            <li className="list-disc ml-10">Meningkatkan pengalaman pengguna &#40;misalnya, rekomendasi menu berdasarkan riwayat&#41;.</li>
            <li className="list-disc ml-10">Mengirim konfirmasi, update status, dan promosi (dengan persetujuan).</li>
            <li className="list-disc ml-10">Mencegah penipuan dan mematuhi hukum.</li>
            <li className="list-disc ml-10">Analisis internal &#40;misalnya, tren pemesanan&#41; tanpa mengidentifikasi individu.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Berbagi Informasi</h2>
          <p className='space-y-1.5'>Kami tidak menjual data pribadi Anda. Informasi dibagikan dengan:</p>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">
              <span className="font-semibold space-y-1.5">Penyedia Layanan:</span> Mitra pengiriman, pembayaran &#40;e.g., Midtrans&#47;Stripe&#41;, dan Sanity untuk data menu.</li>
            <li className="list-disc ml-10">
              <span className="font-semibold">Pihak Hukum:</span> Jika diwajibkan oleh hukum &#40;misalnya, permintaan pengadilan&#41;.</li>
            <li className="list-disc ml-10">
              <span className="font-semibold">Mitra Bisnis:</span> Hanya dengan persetujuan, untuk promosi bersama.</li>
            <li className="list-disc ml-10">
              <span className="font-semibold">Penggabungan:</span> Jika Platform diakuisisi, data dapat dipindahkan.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Keamanan Data</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">
              Kami menggunakan enkripsi &#40;HTTPS, SSL&#41; dan langkah keamanan standar &#40;firewall, akses terbatas&#41;.
            </li>
            <li className="list-disc ml-10">
              Data disimpan di server Sanity yang aman, dengan backup rutin.
            </li>
            <li className="list-disc ml-10">
              Namun, tidak ada sistem 100% aman; kami tidak bertanggung jawab atas akses tidak sah akibat kelalaian pengguna &#40;misalnya, berbagi kata sandi&#41;.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Cookies dan Teknologi Pelacakan</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">
              <span className="font-semibold space-y-1.5">Cookies:</span> Digunakan untuk sesi login, preferensi, dan analitik &#40;Google Analytics&#41;.</li>
            <li className="list-disc ml-10">
              <span className="font-semibold">Opsi Opt-Out:</span> Nonaktifkan cookies di browser, tapi mungkin memengaruhi fungsi Platform.</li>
            <li className="list-disc ml-10">
              <span className="font-semibold">Data Pelacakan:</span> Tidak melacak individu tanpa persetujuan.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Hak Pengguna</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">
              <span className="font-semibold space-y-1.5">Akses & Koreksi:</span> Hubungi kami untuk melihat&#47;memperbarui data Anda.</li>
            <li className="list-disc ml-10">
              <span className="font-semibold">Penghapusan:</span> Minta hapus data &#40;kecuali diperlukan untuk hukum&#47;transaksi&#41;.</li>
            <li className="list-disc ml-10">
              <span className="font-semibold">Penolakan:</span> Batalkan pemasaran via email &#40;unsubscribe link&#41;.</li>
            <li className="list-disc ml-10">
              <span className="font-semibold">Hak Lain:</span> Sesuai UU PDP Indonesia &#40;jika berlaku&#41;, termasuk portabilitas data.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Privasi Anak-Anak</h2>
          <p className="space-y-1.5">
            Platform tidak ditujukan untuk anak di bawah 13 tahun. Jika kami mengetahui pengumpulan data anak, kami akan hapus segera. Orang tua, hubungi kami untuk akses&#47;hapus data anak.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Data Internasional</h2>
          <p className="space-y-1.5">
            Data diproses di server Sanity &#40;AS&#47;EU&#41;. Dengan menggunakan Platform, Anda setuju transfer data lintas batas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Perubahan Kebijakan</h2>
          <p className="space-y-1.5">
            Kami dapat memperbarui Kebijakan ini. Pemberitahuan via email atau Platform. Penggunaan lanjutan berarti penerimaan.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">10. Kontak</h2>
          <p className="space-y-1.5">
            Pertanyaan&#63; Email support@bfod.com atau chat di Platform. Kami akan respons dalam 48 jam.
            Terima kasih atas kepercayaan Anda&#33;
          </p>
        </section>


      </div>
    </Container>
  )
}

export default PrivacyPage