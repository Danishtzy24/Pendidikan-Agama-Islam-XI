import { esc } from './dom';
import { icon } from './art';

type Concept = [string, string];
type MapData = { caption: string; items: Concept[]; mode?: 'flow' | 'compare' | 'cards' };
const map = (caption: string, items: Concept[], mode: MapData['mode'] = 'cards'): MapData => ({ caption, items, mode });

// Visual ini mengikuti materi ringkas dan sengaja ditampilkan seluruhnya tanpa klik.
export const CONCEPT_MAPS: Record<string, MapData> = {
 '1.1': map('Alur berpikir kritis', [['Pahami','Kenali masalah'],['Periksa','Cari bukti & sumber'],['Bandingkan','Cocokkan informasi'],['Simpulkan','Gunakan alasan yang kuat']], 'flow'),
 '1.2': map('Pesan Q.S. Ali ‘Imran/3: 190–191', [['Amati','Langit, bumi, malam & siang'],['Zikir','Mengingat Allah'],['Tafakur','Merenungkan ciptaan'],['Syukur','Ilmu untuk kebaikan']], 'flow'),
 '1.3': map('Ilmu membuka kemampuan', [['Sulṭān','Kekuatan atau kemampuan'],['Ikhtiar','Ilmu, riset & keterampilan'],['Kesadaran','Manusia tetap memiliki batas']], 'flow'),
 '1.4': map('Ciri ulil albab', [['Zikir','Mengingat Allah'],['Pikir','Merenungkan ciptaan'],['Amal','Menggunakan ilmu untuk kebaikan']]),
 '1.5': map('Hubungan ilmu dan teknologi', [['Ilmu','Membantu memahami alam'],['Teknologi','Menerapkan ilmu'],['Etika','Menjaga manusia & lingkungan']], 'flow'),
 '1.6': map('Tabayyun sebelum membagikan', [['Cek','Sumber, waktu & bukti'],['Bandingkan','Cari sumber tepercaya lain'],['Tahan','Jangan sebar jika belum jelas']], 'flow'),
 '2.1': map('Empat wujud iman', [['Janji','Menepati kesepakatan'],['Syukur','Memakai nikmat untuk kebaikan'],['Lisan','Bicara benar & santun'],['Aib','Menjaga martabat orang lain']]),
 '2.2': map('Cara bertanggung jawab atas janji', [['Sepakati','Jangan berjanji sembarangan'],['Tepati','Laksanakan sesuai kesepakatan'],['Beri kabar','Jujur jika berhalangan']], 'flow'),
 '2.3': map('Tiga bentuk syukur', [['Hati','Sadari nikmat dari Allah'],['Lisan','Ucapkan pujian & terima kasih'],['Perbuatan','Gunakan nikmat untuk kebaikan']]),
 '2.4': map('Kenali perbedaannya', [['Bohong','Mengatakan yang tidak benar'],['Ghibah','Mengumbar keburukan yang benar'],['Buhtan / fitnah','Menyebarkan tuduhan yang tidak benar']], 'compare'),
 '2.5': map('Menjaga martabat, tetap melindungi', [['Aib pribadi','Jangan dijadikan gosip'],['Ada bahaya','Utamakan keselamatan korban'],['Minta bantuan','Laporkan kepada pihak tepercaya']], 'flow'),
 '3.1': map('Tawuran dapat bermula dari', [['Provokasi','Ejekan atau kabar belum jelas'],['Tekanan kelompok','Takut dianggap tidak berani'],['Emosi & dendam','Konflik tidak diselesaikan dengan baik']]),
 '3.2': map('Dampak tawuran', [['Diri','Cedera & pendidikan terganggu'],['Orang lain','Korban terluka & trauma'],['Masyarakat','Fasilitas rusak & rasa takut']]),
 '3.3': map('Mengapa khamr dijauhi?', [['Mengganggu akal','Kesadaran dapat terganggu'],['Memicu permusuhan','Hubungan sosial rusak'],['Menghambat ibadah','Lalai dari zikir & salat']]),
 '3.4': map('Penyalahgunaan zat berdampak pada', [['Fisik','Gangguan kesehatan'],['Mental','Konsentrasi & emosi terganggu'],['Sosial','Sekolah dan hubungan terdampak']]),
 '3.5': map('Langkah aman mencegah bahaya', [['Tolak','Katakan tidak dengan tegas'],['Menjauh','Tinggalkan situasi berbahaya'],['Cari bantuan','Hubungi orang tepercaya']], 'flow'),
 '4.1': map('Bedakan tiga istilah', [['Dakwah','Mengajak kepada kebaikan'],['Tabligh','Menyampaikan ajaran'],['Khutbah','Penyampaian dengan aturan khusus']], 'compare'),
 '4.2': map('Empat cara menyampaikan kebaikan', [['Hikmah','Bijaksana'],['Nasihat baik','Santun & membangun'],['Dialog','Berdiskusi dengan baik'],['Teladan','Mencontohkan lewat tindakan']]),
 '4.3': map('Lima rukun khutbah yang dipelajari', [['Hamdalah','Memuji Allah'],['Shalawat','Untuk Nabi Muhammad saw.'],['Wasiat','Ajakan bertakwa'],['Ayat','Membaca Al-Qur’an'],['Doa','Untuk muslimin di khutbah kedua']], 'flow'),
 '4.4': map('Siapkan tabligh yang mudah dipahami', [['Kenali','Pahami pendengar'],['Periksa','Pastikan sumber benar'],['Sampaikan','Gunakan bahasa santun & jelas']], 'flow'),
 '5.1': map('Peran ulama bagi masyarakat', [['Mengajar','Mengembangkan pendidikan'],['Menulis','Mewariskan karya'],['Membimbing','Berbagi ilmu & teladan']]),
 '5.2': map('Jejak Nawawi al-Bantani', [['Asal','Tanara, Banten'],['Kiprah','Belajar & mengajar di Makkah'],['Karya','Marah Labid: tafsir Al-Qur’an']], 'flow'),
 '5.3': map('Jejak Abdus Samad al-Palimbani', [['Asal','Palembang'],['Bidang','Tasawuf & akhlak'],['Karya','Hidayatus Salikin & Siyarus Salikin']], 'flow'),
 '5.4': map('Jejak Nuruddin ar-Raniri', [['Asal','Ranir, Gujarat'],['Kiprah','Penasihat Kesultanan Aceh'],['Karya','Bustan al-Salatin & Al-Shirath al-Mustaqim']], 'flow'),
 '5.5': map('Teladan yang bisa diterapkan', [['Tekun','Terus belajar'],['Rendah hati','Terbuka menerima ilmu'],['Berbagi','Berkarya untuk masyarakat']]),
 '6.1': map('Pesan Q.S. Yunus/10: 40–41', [['Sampaikan','Sampaikan kebenaran dengan baik'],['Hormati','Perbedaan tidak boleh jadi alasan menghina'],['Bertanggung jawab','Setiap orang bertanggung jawab atas amalnya']]),
 '6.2': map('Toleransi: yang dilakukan dan yang bukan', [['Menghormati','Menghargai hak & perbedaan'],['Memberi ruang','Tidak memaksakan keyakinan'],['Tetap berprinsip','Tidak mencampuradukkan akidah']], 'compare'),
 '6.3': map('Pesan Q.S. al-Ma’idah/5: 32', [['Nyawa berharga','Hormati kehidupan manusia'],['Selamatkan','Cegah kekerasan & bantu sesama'],['Cara yang sah','Jangan main hakim sendiri']]),
 '6.4': map('Toleransi dalam keseharian', [['Dengarkan','Beri kesempatan bicara'],['Hormati','Jangan mengejek perbedaan'],['Bekerja sama','Bersama dalam kegiatan baik']], 'flow'),
 '6.5': map('Saat melihat perundungan', [['Jangan ikut','Tidak menertawakan atau menyebarkan'],['Bantu aman','Dampingi korban bila memungkinkan'],['Laporkan','Sampaikan kepada guru atau orang tepercaya']], 'flow'),
 '7.1': map('Menjaga kehormatan diri', [['Jujur','Menjaga ucapan'],['Bertanggung jawab','Menjaga tindakan'],['‘Iffah','Menahan diri dari hal tidak pantas']]),
 '7.2': map('Ikhlas berawal dari niat', [['Niat','Tulus karena Allah'],['Amal','Tetap berbuat baik'],['Sikap','Tidak mengejar pujian']], 'flow'),
 '7.3': map('Membedakan rasa malu', [['Malu terpuji','Menahan diri dari keburukan'],['Malu yang keliru','Menghalangi bertanya atau meminta bantuan']], 'compare'),
 '7.4': map('Zuhud bukan berarti meninggalkan usaha', [['Hati','Tidak diperbudak harta'],['Usaha','Tetap bekerja dengan baik'],['Harta','Digunakan secara bertanggung jawab']], 'compare'),
 '8.1': map('Adab di setiap aktivitas digital', [['Membaca','Periksa informasi'],['Berkomentar','Gunakan bahasa sopan'],['Membagikan','Jaga privasi & izin']]),
 '8.2': map('Pikirkan dampak unggahan', [['Cepat tersebar','Informasi mudah diteruskan'],['Sulit hilang','Jejak digital bisa bertahan lama'],['Bisa merugikan','Unggahan keliru merusak nama baik']], 'flow'),
 '8.3': map('Empat kebiasaan bermedia sosial', [['Cek fakta','Lakukan tabayyun'],['Jaga privasi','Minta izin'],['Hargai karya','Cantumkan sumber'],['Atur waktu','Jangan abaikan kewajiban']]),
 '8.4': map('Sebelum mengunggah foto teman', [['Tanya','Minta izin pemilik foto'],['Hormati','Terima jika ia menolak'],['Unggah','Bagikan hanya jika diizinkan']], 'flow'),
 '8.5': map('Saring sebelum mengirim', [['Benar?','Sudah diperiksa'],['Bermanfaat?','Tidak merugikan'],['Sopan?','Tanpa menghina'],['Ada izin?','Hormati hak orang lain']]),
 '9.1': map('Tujuan keluarga dalam pernikahan', [['Sakinah','Tenteram'],['Mawaddah','Penuh cinta'],['Rahmah','Kasih sayang']]),
 '9.2': map('Hukum bergantung pada keadaan', [['Wajib','Mampu & khawatir terjerumus'],['Sunah','Mampu dan berkeinginan'],['Mubah','Tidak ada faktor kuat lain'],['Makruh','Khawatir tak penuhi hak'],['Haram','Niat menzalimi atau ada larangan']], 'compare'),
 '9.3': map('Lima rukun nikah dalam fikih Syafi’i', [['Calon suami','Pihak yang menikah'],['Calon istri','Pihak yang menikah'],['Wali','Dari pihak perempuan'],['Dua saksi','Menyaksikan akad'],['Ijab kabul','Pernyataan akad']], 'flow'),
 '9.4': map('Bedakan mahar dan pencatatan', [['Mahar','Pemberian wajib untuk istri'],['Rukun nikah','Mahar bukan salah satu dari lima rukun'],['Pencatatan','Memenuhi ketentuan negara']], 'compare'),
 '9.5': map('Contoh masa idah sesuai keadaan', [['Hamil','Sampai melahirkan'],['Suami meninggal, tidak hamil','Empat bulan sepuluh hari'],['Cerai hidup, masih haid','Tiga quru’; penafsiran berbeda'],['Cerai hidup, tidak haid','Tiga bulan menurut ketentuan fikih']], 'compare'),
 '9.6': map('Memahami rujuk', [['Talak raj‘i','Jenis talak yang memungkinkan rujuk'],['Dalam idah','Rujuk dilakukan selama masa idah'],['Idah berakhir','Pernikahan kembali memerlukan akad baru']], 'flow'),
 '10.1': map('Salah satu periodisasi sejarah Islam', [['Klasik','650–1250 M'],['Pertengahan','1250–1800 M'],['Modern','1800 M–sekarang']], 'flow'),
 '10.2': map('Latar munculnya pembaruan', [['Kolonialisme','Banyak wilayah berada di bawah pengaruh kolonial'],['Perubahan dunia','Eropa maju dalam ilmu & teknologi'],['Evaluasi','Sebagian umat terdorong memperbarui diri']], 'flow'),
 '10.3': map('Arah pembaruan Islam', [['Dasar','Al-Qur’an & sunah'],['Cara','Ilmu dan ijtihad'],['Tujuan','Pendidikan & kehidupan yang lebih baik']], 'flow'),
 '10.4': map('Ciri perkembangan masa modern', [['Pendidikan','Pembaruan lembaga belajar'],['Organisasi','Tumbuhnya kegiatan sosial'],['Ilmu & media','Buku, surat kabar, dan teknologi']]),
 '10.5': map('Tokoh pembaruan Islam', [['Al-Afghani','Persatuan & pembaruan pemikiran'],['Muhammad Abduh','Pembaruan pendidikan'],['Rasyid Ridha','Penyebaran gagasan pembaruan']]),
 '10.6': map('Peta besar materi PAI XI', [['Iman & akhlak','Berpikir kritis dan berperilaku baik'],['Hidup bersama','Dakwah santun, toleransi & adab'],['Kehidupan umat','Pernikahan dan peradaban Islam']]),
};

export function conceptMapHTML(number: string): string {
 const data = CONCEPT_MAPS[number];
 if (!data) return '';
 const symbols = ['book', 'layers', 'check-circle', 'heart', 'shield'];
 return `<figure class="concept-map concept-${data.mode}" aria-label="${esc(data.caption)}"><figcaption><span class="concept-tag">${icon('layers')} PETA KONSEP</span><span class="concept-caption">${esc(data.caption)}</span></figcaption><div class="concept-grid" style="--concept-count:${data.items.length}">${data.items.map(([title, description], index) => `<div class="concept-item"><div class="concept-icon">${icon(symbols[index % symbols.length])}</div><div class="concept-copy"><strong>${esc(title)}</strong><span>${esc(description)}</span></div>${data.mode === 'flow' && index < data.items.length - 1 ? '<span class="concept-next" aria-hidden="true">→</span>' : ''}</div>`).join('')}</div></figure>`;
}
