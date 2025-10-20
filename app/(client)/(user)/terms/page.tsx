import Container from '@/components/Container'
import React from 'react'

const TermsPage = () => {
  return (
    <Container className="max-w-3xl sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-6">Syarat dan Ketentuan Layanan</h1>
      <div className="space-y-4">
        <section>
          <p>
            Selamat datang di BFOOD Catering App Kami. Dengan mengakses atau menggunakan Platform kami, termasuk pemesanan menu catering, Anda setuju untuk terikat oleh Syarat dan Ketentuan Layanan ini. Jika Anda tidak setuju dengan ketentuan ini, jangan gunakan Platform kami.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Penerimaan Syarat</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">Syarat ini mengatur penggunaan Platform kami untuk memesan layanan catering, termasuk menu, paket, dan pengiriman.</li>
            <li className="list-disc ml-10">Dengan membuat akun atau melakukan pemesanan, Anda menyatakan bahwa Anda berusia minimal 18 tahun atau memiliki persetujuan orang tua&#47;wali.</li>
            <li className="list-disc ml-10">Kami dapat memperbarui Syarat ini kapan saja. Pemberitahuan akan diberikan melalui email atau Platform. Penggunaan lanjutan setelah perubahan berarti Anda menerima Syarat yang diperbarui.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Akun Pengguna</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">Anda bertanggung jawab atas keakuratan informasi akun &#40;nama, email, telepon, alamat&#41;.</li>
            <li className="list-disc ml-10">Jaga kerahasiaan kata sandi akun Anda. Kami tidak bertanggung jawab atas akses tidak sah.</li>
            <li className="list-disc ml-10">Anda setuju untuk tidak membuat akun palsu atau melanggar hukum.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Layanan dan Pemesanan</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">
              <span className="font-bold">Deskripsi Layanan:</span> Syarat ini mengatur penggunaan Platform kami untuk memesan layanan catering, termasuk menu, paket, dan pengiriman.
            </li>
            <li className="list-disc ml-10">
              <span className="font-bold">Pemesanan:</span> Pemesanan bersifat mengikat setelah konfirmasi pembayaran. Harga dapat berubah tanpa pemberitahuan.
            </li>
            <li className="list-disc ml-10">
              <span className="font-bold">Pembayaran:</span> Semua pemesanan memerlukan pembayaran penuh di muka melalui metode yang tersedia &#40;transfer bank, e-wallet, dll.&#41;. Biaya pengiriman terpisah.
            </li>
            <li className="list-disc ml-10">
              <span className="font-bold">Pengiriman:</span> Pengiriman tergantung lokasi dan ketersediaan. Kami tidak bertanggung jawab atas keterlambatan akibat force majeure &#40;cuaca, lalu lintas, dll.&#41;.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Pembatalan dan Pengembalian Dana</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">
              <span className="font-bold">Pembatalan oleh Pelanggan:</span>
              <ul className="space-y-1.5">
                <li className="list-disc ml-6">Sebelum konfirmasi: Gratis.</li>
                <li className="list-disc ml-6">Setelah konfirmasi: 50&#37; pengembalian jika &gt;24 jam sebelum pengiriman; 0&#37; jika &lt;24 jam.</li>
              </ul>
            </li>
            <li className="list-disc ml-10">
              <span className="font-bold">Pembatalan oleh kami:</span> Pengembalian dana penuh jika pembatalan karena alasan kami &#40;misalnya, stok habis&#41;.
            </li>
            <li className="list-disc ml-10">Pengembalian dana diproses dalam 7&#45;14 hari kerja.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Kualitas dan Keluhan</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">Kami berusaha memastikan kualitas makanan sesuai deskripsi. Namun, rasa dan preferensi subjektif.</li>
            <li className="list-disc ml-10">Laporkan keluhan dalam 2 jam setelah pengiriman melalui email/support chat. Kami dapat mengganti atau mengembalikan dana berdasarkan penilaian.</li>
            <li className="list-disc ml-10">Kami tidak bertanggung jawab atas alergi atau masalah kesehatan; beri tahu preferensi khusus saat pemesanan.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Hak Kekayaan Intelektual</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">Semua konten Platform &#40;logo, gambar, teks&#41; milik kami atau lisensor. Dilarang menyalin, mendistribusikan, atau menggunakan tanpa izin.</li>
            <li className="list-disc ml-10">Penggunaan Platform untuk tujuan komersial dilarang kecuali disetujui tertulis.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Privasi</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">Lihat Kebijakan Privasi untuk bagaimana kami mengumpulkan dan menggunakan data Anda.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Batasan Tanggung Jawab</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">Platform disediakan "sebagaimana adanya". Kami tidak menjamin ketersediaan 100% atau bebas error.</li>
            <li className="list-disc ml-10">Tanggung jawab kami terbatas pada pengembalian dana atau penggantian barang. Tidak bertanggung jawab atas kerugian tidak langsung &#40;hilang keuntungan, dll.&#41;.</li>
            <li className="list-disc ml-10">Anda setuju untuk mengganti rugi kami dari klaim pihak ketiga akibat penggunaan Platform Anda.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Hukum yang Berlaku</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">Syarat ini diatur oleh hukum Republik Indonesia. Sengketa diselesaikan di pengadilan Malang.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Kontak</h2>
          <ul className="space-y-1.5">
            <li className="list-disc ml-10">Pertanyaan? Hubungi support@bfod.com atau chat di Platform.</li>
          </ul>
          <p className="space-y-1.5">Dengan menggunakan Platform, Anda menerima Syarat ini. Terima kasih!</p>
        </section>
      </div>
    </Container>
  )
}

export default TermsPage