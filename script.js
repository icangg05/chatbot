const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector("#send-message");
const fileInput = document.querySelector("#file-input");
const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
const fileCancelButton = document.querySelector("#file-cancel");
const chatbotToggler = document.querySelector("#chatbot-toggler");
const closeChatbot = document.querySelector("#close-chatbot");

const context = `
WALIKOTA
KENDARJ
PROVINSISULAWESITENGGARA
PERATURAN WALIKOTA KENDARI
NOMOR l3
TAHUN 2022
TENTANG
SUSUNAN ORGANlSASl DAN TATA KERJA
DINAS KEPENDUDUKAN DAN PENCATATAN SIPIL KOTA KENDARI
DENGAN RAHMAT TUHAN YANG MAHA ESA
WALIKOTA KENDARl,
bahwa
da)am
rangka
pelaksanaan
kebijakan
penyederhanaan
birokrasi di lingkungan instansi
pemerintah daerah, perlu dilakukan penataan Susunan
Orgamsasi dan Tata r<erja Dinas Kependudukan dan
Pencatatan Sipil Kota Kendari;
bahwa untuk melaksanakan ketentuan Pasal 16 ayat
(2) Peraturan Menteri Pendayagunaan Aparatur Negara
dan Reformasi Dirokrasi Nomor 25 Tahun 2021 tentang
Penyederhanaan Struktur Organisasi Pada lnst:ansi
Pemerinlah Untuk Penyederhanaan Bi.rokrasi;
bahwa
berdasarkan
pertirnbangan
sebagaimana
dimaksud dala.ro huruf a dan huruf b, perlu
mcnetapkan Peraturan Walikota tentang Susunan
Organisasi dan Tata Kerja Dinas Kependudukan dan
Pencatatan Sipil Kota Kenda.ri;
Pasal
18
ayat
(6)
Undang-Undang
Dasar Negara
Republik Indonesia Tahun 1945;
Unda.ng-Undang Nomor 6 Tahun 1995 tentang
Pernbentukan Kotamadya Daerah Tingkat II Kendari
(Lembaran Negara Republik Indonesia Tahun 1995
Nomor 44, Tambahan Lernbaran Negara Republik
Indonesia Nornor 3602);
Undang-Undang Nornor 5 Tahun 2014 tentang
Aparatur Sipil Negara (Lembaran Negara Republik
Indonesia Tahun 2014 Nomor 6, Tambahan Lembaran
Negara Republik Indonesia 5954);
Undang-Undang Nomor 23 Tahun 2014 tcntang
Pernerintahan Daerah (Lembaran Negara Republik
Indonesia Tahun 2004 Nomor 244, Tambahan
Lembaran Negara Republik Indonesia Nomor 5587)
sebagairoana telah diubah beberapa kali terakhir
dengan Undang-Undang Nomor 11 Tahun 2020
tentang Cipta Kerja (Lembaran Negara Republik
Indonesia Tahun 2020 Nomor 245, Tambahan
Lembaran Negara Republik Indonesia Nomor 6573);

Peraturan Pemerintah Nornor 18 Tahun 2016 tentang
Perangkat Daerah
(Lembaran Negara Republik
lndonesia Tahun 2016 Nomor 114, Tambahan
Lembaran Negara Republik Indonesia Nomor 5887]
sebagaimana
telah
diubah
dengan
Peraturan
Pemerintah Nomor 72 Tahun 2019 tentang Perubahan
Atas Peraturan Pemerintah Nomor 18 tahun 2016
tentang Perangkat Daerah (Lembaran Negara Republik
Indonesia Tahun 2019 Nomor 187);
Peraturan Pemerintab Nornor 11 Tahun, 2017 tentang
Manajemen Pegawai Negeri Sipil (Lembaran Negara
Republik Indonesia Tahun 2017 Nomor 63, Tambahan
Lemharan Negara Republik Indonesia Nornor 6037)
sebagimana telan diubah dengan Peraturan Pemerintah
Nomor 17 Tahun 2020 tentang perubahan atas
Peraturan Pemerintah Nomor 11 Tahun 2017 ten tang
Manajemen Pegawai Negeri Sipil (Lembaran Negara
Republik Indonesia Tahun 2020 Nomor 68 tambahan
Lembaran Negara Republik Indonesia Tahun 2020
Nomor 6477);
Peraturan Menteri Dalam Negeri Nornor 80 Tahun 2015
tentang Pembentu.kan Produk Hukum Daerah (Berita
Negara Republik [ndonesia Tabun 2015 Nomor 2036)
sebagaimana telah diubah dengan Peraturan Menteri
Dalam Negeri Nomor 120 Tahun 2018 tentang
Perubahan atas Peraturan Menteri Dalam Negeri
Nomor 80 Tahun 2018 tentang Pembentukan Produk
llukum Daerah (Serita Negara Republik Indonesia
Tahun 2018 Nornor 157);
Peraturan Menteri Dalarn Negeri Nornor 14 Tahun 2020
tentang Pedoman Nomenklatur Dinas Kependudukan
dan Pencatatan Sipil di Provinsi dan Kabupaten/Kata;
(Berita Negara Republik Indonesia Tahun 2020 Nomor
202);
9.

10.

11.

Peraturan Menteri Pendayagunaan Aparatur Negara
dan Reformasi Birokraai Nomor 17 Tahun 2021 tentang
Penyetaraan Jabatan
Admmistrasi
ke
dalam
Jabatan Fungsional (Berita Negara Republik Indonesia
Tahun 202 t Nomor 525);
Peraturan Mcntcri Pcndayagunaan Aparatur Negara
dan Reformasi Birokrasi Nomor 25 Tahun 2021 tentang
2021 tentang Penyederhanaan Struktur Organisasi
Pada Instanai Pemerintah untuk Penyederhanaan
Birokrasi (BeriLa Negara Republik Indonesia Tahun
2021 Nomor 546);
Peraturan Daerah Kota Kendari Nomor 5 Tahun 2016
tentang Pembentukan dan Susunan Perangkat Daerah
Kota Kendari (Lernbaran Daerah Kota Kendari Tahun
2016 Nornor 5) sebagaimana telah diubah beberapa
kali terakhir dengan Peraturan Daerah Kota Kendari
Nomor 11 Tahun 2020 tentang Perubahan Kedua Atas
Peraturan Daerah Nomor 5 Tahun 2016 tentang
Pembentukan dan Susunan Perangkat Daerah Kola
Kendari [Lembaran Daerah Kata Kendari Tabun
2020 Nomor 11);
-3MEMUTUSKAN :
Menetapkan : PERATURAN
WALIKOTA
TENTANO
SUSUNAN
ORGANISASI DAN TATA KERJA DINAS KEPENDUDUKAN
DAN PENCATATAN SIPIL KOTA KENDARI
BABI
KETENTUAN UMUM
•
Paaal 1
Dalam Peraturan Walikota ini, yang dirnaksud dengau :
1. Kota adalah Kota Kendari.
2. Pemerintah Daerah adalah Walikota dan Perangkat Daerah sebagai
unsur Penyelenggara Pemerintahan Daerah yang memimpin pelaksanaan
urusan pemerintahan yang menjad.i kewenangan Pemerintah Kota
Kendari.
3. Walil<otaadalah Walikota Kendari,
4. Sekretaris Daerah adalah Sekretaris Daerah Kota Kendari,
5. Dinas adalah Dinas Kependudukan dan Pencatatan Sipil Kota Kendari.
6. Kepala Dlnas adalah Kepala Dinas Kependudukan dan Pencatatan Sipil
Kata Kendari,
7. Unit Pelaksana Teknis Daerah yang selanjutnya disingkat UPTD
adalah unsur pelaksana teknis dinas yang melaksanakan kegiatan
tekms operasional dan/atau kegiatan teknis penunjang tertentu Iingkup
dinas.
8. Jabatan Fungsional adalah sekelompok jabatan yang berisi fungsi dan
tugas berkaitan dengan pelayanan fungsional yang berdasarkan pada
keahlian dan keterampilan tertentu Lingkup Dinas.
9. Sub Koordinator adalah Jabatan Fungsional Ahli Muda yang d.iberikan
tugas dan fungsi koordinasi serta pengelolaan kegiatan sesuai bidang
tugasnya dalam suatu satuan kerja
BABII
BENTUK, NOMENKLATUR DAN TIPE PERANGKAT DAERAH
Bagian Kesatu
Bentuk Perangkat Daerah
Pasal 2
Perangkat
Daerah yan_g rnelaksanakan urusan pemerintahan bidang
Administrasi Kependudukan dan Pencatatan Sipil diwadahi dalam bentuk
Din as.
Bagian Kedua
Nomenklatur Perangkat Daerah
Pasal 3
Nomen.klatur perangkat daerah yang rnelaksanakan urusan pemerintahan
bidang
Administrasi
Kependudukan
dan
Pencatatan
Sipil
sebagaimana dimaksud dalam Pasal 2, adalah Dinas Kependudukan dan
Pencatatan
Sipil.

-4 -
Bagian Ketiga
Tipe Perangkat Daerah
Pasal 4
(1) Tipe perangkat daerah sebagaimana dimaksud dalam Pasal 3,
diklasifikasikan atas tipe A.
(2) Penentuan tipe Din.as sebagaimana dimaksud pada ayat (1) berdasarkan
hasil pengukuran intensitas
penyelenggaraan urusan pemerintaban
bidang Administrasi Kependudukan dan Pencatatan Sipil.
(3) Penentuan
intensitas
penyelenggaraan
urusan
pemerintaban
sebagaimana dimaksud pada ayat (2), dilaksanakan berdasarkan
kerentuan Peraruran Perundang-undangan.
BABm
KEDUDUKAN DAN SUSUNAN ORGANlSASI
Bagian Kesatu
Kedudukan Organisasi
Pasal 5
(1) Dinas merupakan unsur pelak:sana urusan pemerintahan yang menjadi
kewenangan Daerah.
(2) Dinas dipimpin oleh Kepala Dinas yang berkedudukan di bawah dan
bertanggungjawa.b kepada Walikota melalui Sekretaris Daerab.
Pasal 6
Dinas mempunyai tugas melaksanakan Urusan Pemerintahan yang menjadi
kewenangan Da.erab dan tugas pembantuan yang diberikan kepada Daerah
di bidang administrasi kependudukan dan pencatatan sipil.
Pa.sal 7
Dalam rnelaksanakan tugas sebagaimana cl.imaksud dalam Pasal 6, Dinas
menyelenggarakan fungsi :
a. perumusan kebijakan di bidang administrasi kependudukan
dan
pencatatan sipil;
b. pelaksanaan kebijakan di bidang adrninistrasi kependudukan dan
pencatatan Sipil;
c. pelaksanaan
evaluasi
dan pelaporan
di bidang
administrasi
kependudukan dan pencatatan sipil;
d. pelaksanaan administrasi dinas di bidang administrasi kependudukan
dan Pencatatan Sipil; dan
e. pelaksanaan fungsi lain yang cliberikan oleh Walikota sesuai dengan
tugas dan fungsi Dinas.

Bagian Kedua
Susunan Organisasi
Pasal 8
(1) Susunan Organisasi Dinas, terdiri atas:
a. Kepala Dinas;
b. Sekretariat;
c. Bidang Pelayanan Pendaftaran Pcnduduk;
-5d. Bidang Pelayanan Pencatatan Sipil;
e. Bidang Pengelolaan Informasi Administrasi
f. Bidang Pemanfaatan Data dan Inovasi;
Kependudukan;
g. Unit Pelaksana Teknis Daerah; dan
h. Kelompok Jabatan Fungslonal.
(2) Bagan Susunan Organisasi sebagaimana dimaksud pada ayat (1)
tercantu.m pada lampiran yang merupakan bagian yang tidak
terpisahkan dengan Peraturan Walikota ini.
BAB IV
TUGAS DAN FUNGSI
Bagian Kesatu
Kepala Dinas
Pasal 9
Kepala Dinas mempunyai tugas memimpin dan mengkoordinasikan
pelaksanaan urusan pemerintahan di bidang administrasi kependudukan
dan pencatatan sipil yang menjadi kewenangan Daerah dan tugas
pembantuan serta bertanggung jawab alas terlaksananya tugas dan fungsi
Dinas.
Bagian Kedua
Sekretariat
Pasal 10
(1) Sekretariat mempunyai tuga.s pelayanan administrasi dan Ketausahaan
yang meliputi. urusan keuangan, umum dan perlengkapan, serta
kepegawaian serta mengkoordinasikan penyusunan program, evaluasi
dan pelaporan Dinas.
(2) Sekretariat sebagaimana dimakeud pada ayat (1), dipimpin oleh
Sekretaris yang berada di bawah dan bertanggung jawab kepada Kepala
Dinas.
Pasal 11
Da!am melaksanakan
tu gas sebagaimana dimaksud dalam Pasal 1 0 ayat ( 1),
Sekretanat menyelenggarakan fungsi :
a. penyelenggaraan penyusunan perencanaan;
b. penyelenggaraan pengelolaan administrasi perkantoran, administrasi
keuangan dan administraei kepegawaian;
c. penyelenggaraan urusan umum dan perlengkapan, keprotokolan dan
hubungan masyarakat;
d. penyelenggaraan ketatalaksanaan, kearsipan dan perpustakaan;
e. pelaksanaan koordinasi, pembinaan, pengendalian, evaluasi dan
pelaporan pelaksanaan kegiatan unit kerja; dan
f. pelaksanaan tugas lain yang diberika.n oleh Kepala Dinas sesuai dengan
tugas dan fungsinya.
Pasal 12
Sekretariat, terdiri atas :
a. Sub Bagian Keuangan;
b. Sub Bagian Umum dan Kepegawaian; dan
c. Kelompok Jabatan Fungsional
-6·
Pasal 13
(1) Sub Bagian Keuangan sebagairnana dirnaksud dalam Pasal huruf a,
mempunyai tugas
menyusun pedoman dan petunjuk teknis serta
melaksanakan
urusan
pengkoordinasian
penyusunan
anggaran,
penatausahaan keuangan, perbendaharaan, verifikasi, pelaporan dan
pertangguogjawaban keuangan.
(2) Sub Bagian Umum clan Kepegawaian sebagaimana dirnaksud dalam
Pasal 12 huruf b, mempunyai tugas menyusun pedoroan dan petunjuk
tekois serta melaksanakan urusan ketatausahaan, surat-menyurat dan
kearsipan, kehumasan dan protokoler, rumah tangga, administrasi
kepcgawaian, ketatalaksanaan, pendidikan dan pelatihan aparatur serta
hukurn clan Perundang-undangan serta pelaksanaan urusan pengelolaan
barang dan aset Dinas.
(3) Sub Bagian sebagaimana dimaksud pada ayat (1) dan ayat (2), dipimpin
oleh Kepala Sub Bagian yang berada di bawah dan bertanggung jawab
kepada Sekretaris
Baglan Ketiga
Bidang Pelayanan Pendaftaran Penduduk
Pasal 14
(1) Bidang
Pelayanan
Pendaftaran
Penduduk
mempunyai
tugas
melaksanakan penyusunan bahan perumusan clan kebijakan di Bidang
pelayanan pendaftaran penduduk.
(2) Bidang sebagaimana dimaksud pada ayat (1), dipirnpin oleh Kepala
Bidang yang berada di bawah dan bertanggung jawab kepada Kepala
Dinas.
Pasal 15
Dalam me1aksanakan tugas sebagairnana dimaksud dalam Pasal 14 ayat (1),
Bidang Pelayanan Pendaftaran Penduduk menyelenggarakan fungsi :
a. penyusunan rencana dan program kerja bidang Pelayanan Pendaltaran
Penduduk:
b. pelaksanaan pembinaan, pengawasan dan
pengendalian kegiatan
perencanaan teknis identitas penduduk, pindah datang penduduk dan
pendataan penduduk;
c. pclaksanaan
pembinaan
pengelolaan
administrasi
teknis
pelaksanaan identitas penduduk, pindah darang penduduk dan
pendataan penduduk;
d. perumusan kebijakan teknis identitas penduduk, pindah datang
penduduk dan pendataan penduduk;
e. pelaksa.naan penyusunan rencana, pengawasan, pengendalian identitas
penduduk, pindah datang penduduk dan pendataan penduduk;
r. pelaksanaan koordinasi dan konsultasi dengan instansi terkait;
g. pelaksanakan pengawasan, pengendalian, monitoring, evaluasi dan
pelapora.n pelayanan pendaftaran penduduk; dan
h. pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan
tugas dan Iungsinya,
Pasal 16
Susunan Organisasi Bidang Pelayanan Pendaftaran Penduduk sebagaimana
dimaksud dalam Pasal 14, terdiri atas KelompokJabatan Fungsional
.7.
Bagian Keempat
Bidang Pelayanan Pencatatan Sipil
Pasal 17
(l) Bidang Pelayanan Pencatatan Sipil mempunyai rugas melaksanakan
penyusunan bahan perumusan dan pelaksanaan kebijakan di bidang
pelayanan pencatatan sipil,
(2) Bidang sebagaimana dimaksud pada ayat (I). dipimpin oleh KepaJa
Bidang yang berada di bawah dan bertanggung jawab kepada Kcpala
Dinas.
Pasal 18
Dalam melaksanakan rugas sebagaimana dimaksud dalam Pasal 17 ayat ( l),
Bidang Pelayanan Pencatatan Sipil menyelenggarakan tu ngsi :
a. penyusunan rencana dan program kerja bidang pelayanan pencatatan
srpil;
b. pelaksanaan pernbinaan,
pengawasan dan pengendalian kegiatan
perencanaan teknis kelahiran, perkawinan dan perceraian, perubaban
status anak, pewarganegraan dan kematian;
c. pelaksanaan pembinaan pengelolaan administrasi teknis pelaksanaan
kelahiran, perkawinan dan perceraian, perubahan status anak,
pewarganegraan dan kematian;
d. perumusan kebijakan teknis kelahiran, perkawinan dan perceraian,
perubaban Status Anak, pewarganegraan dan kematian;
e. pelaksanaan penyusunan rencana, pengawasan, pengendalian kelahiran,
perkawinan dan perceraian, perubahan status, pewarganegraan dan
kematian;
f. pelaksanaan koordinasi dan konsultasi dengan instansi terkait;
g. pelaksanakan pengawasan, pengendalian, monitoring, evaluasi dan
pelaporan kegiatan pelayanan pencatatan sipil; dan
h. pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan
tugas dan fungsinya.

Pasa.119
Susunan Organisasi Bidang Pelayanan Pencatatan Sipil sebagaimana
dimaksud dalam Pasal 17, terdiri atas Kelompok Jabatan Fungsional
Bagian Kelima
Bldang Pengelolaan lnformasi Admirustras
i Kependudukan
Pasal 20
(1) Bidang Pengelolaan lnformasi Administrasi Kependudukan
mempunyai
tugas melaksanakan perumusan, pengkoordinasian dan pelaksanaan
kebijakan teknis di bidang Sistim lnformasi Admioistrasi Kependudu.kan,
Pengelolaan dan Penyajian Data, Tata Kelola dan Sumber Daya Manusia
Teknologi lnformatika dan Komunikasi.
(2) Bidang sebagaimana dimaksud pada ayat (1), dipimpin oleh Kepala
Bidang yang berada di bawah dan bertanggung jawab kepada Kepala
Dinas.

. 8.
Pasal 21
Dalam melaksanakan tugas sebagaimana dimaksud dalam Pasal 20 ayat
( LJ,
Bidang
Pengelolaan
Informasi
Administrasi
Kependudukan
menyelenggarakan fungsi :
a. penyusunan rencana dan program kerja bidang pengelolaan informasi
adrninistrasi kependudukan;
b. pelaksanaan pernbinaan, pengawasan dan pengendalian kegiatan
perencanaan teknis sistim informasi administrasi kependudukan,
pengelolaan dan penyajian data, tata kelola dan sumbe.r daya manusia
teknologi informatika dan komunikasi;
c. pelaksanaan pembinaan pengelolaan adminietrasi teknis pelaksanaan
sistim mformasi administrasi kependudukan, pengelolaan dan penyajian
data, tata kelola dan sumber daya manusia teknologi inforrnatika dan
komunikasi;
d. perumusan
kebijakan
teknis
sistim
informasi
admlnistrasi
kcpcndudukan, pengelolaan dan penyajian data, tata kelola dan sumber
daya manusia teknologi informatika dan kornunikasi;
e. pelaksanaan penyusunan rencana, pengawasan, pengendalian sietim
Informasi aclministrasi kependudukan, pengelolaan dan penyajian Data,
tata kelola dan sumber daya manusia teknologi Informatjka dan
komunikasi;
f. pelaksanaan koordinasi dan konsultasi dengan instansi terkait;
g. pelaksanakan pengawasan, pengendalian, monitoring, evaluasi dan
pelaporan
penyelenggaraan
pengelolaan
informasi
admnistrasi
kependudukan;dao
h. pelaksariaan fungsi lain yang diberi.kan oleh Kepala Dinas sesuai dengan
tugas dan fungsinya.
Pasal 22
Susunan
Organisasi
Bidang Pengelolaan Informasi
Adrninistrasi
Kependudukan sebagaimana dimaksud dalarn Pasal 20, terdiri atas
Kelompok Jabatan Fungsional
Bagian Keenam
Bidang Pemanfaatan Data dan Inovasi
Pasal 23
(1) Bidang Pernanfaatan Data dan lnovasi mempunyai tugas melaksanakan
perumusan, pengkoordinasian dan pelaksanaan kebijakan teknis di
bidang Kerjasama, Pemanfaatan Data dan Dokurnen Kependudukan dan
lnovasi Pelayanan.
(2) Bidang sebagaimana dimaksud pada ayat (1 ), dipirnpin oleb Kepala
Bidang yang berada di bawah dan bertanggung jawab kepada Kepala
Dinas,
Paw 24
Dalam melaksanakan tugas sebagaimana dimaksud dalam Pasal 23 ayat (1),
Bidang Pemanfaatan Data dan Inovasi menyelenggarakan fungsi :
a. penyusunan reneana dan program kerja bidang pemanfaatao data dan
inovasi;
-9-
b. pelaksanaan pembinaan, pengawasan dan pengendalian kegiatan
perencanaan teknis kerjasama, pernanfaatan data dan dokumen
kependudukan dan inovasi pelayanan;
c. pelaksanaan pembinaan pengelolaan admin.istrasi teknis pelaksanaan
kerjasama, pemanfaatan data dan dokumen kependudukan dan inovasi
pelayanan;
d. perumusan kebijakan teknis kerjasama, pernanfaatan data dan dokumen
kependudukan dan inovasi pelayanan;
e. pelaksanaan
penyusunan
rencana,
pengawasan,
pengendalian
Kerjasama, Pemanfaatan Data dan Dokum.en Kependudukan dan Inovasi
Pelayanan;
f. pelaksanaan koordinasi dan konsultasi dengan instansi terkait;
g. pelaksanakan pengawasan, pengendalian, monitoring, evaluasi dan
pelaporan penyelenggaraan pemanfaatan data dan inovasi: dan
h. pelaksanaan fungsi lain yang diberikan oleh Kepala Dinas sesuai dengan
tugas dan fungsinya.
Pasal 25
Susunan Organisasi Bidang Pemanfaatan Data dan lnovasi sebagaimana
dimaksud dalam Pasal 23, terdiri atas Kelompok Jabatan Fungsional
Bagian Ketujuh
Unit Pelaksana Teknis Daerah
Pasal 26
(1) Pada Dinas dapat dibentuk U.PTD uncuk melaksanakan kegiatan teknis
opersional dan/atau kegiatan teknis penunjang tertentu.
(2) Kepala UPTD pada Dinas berada di bawah dan bertanggungjawab
kepada Kepala Dinas.
(3) Klasifikasi UPI'D terdiri atas :
a. UPTD Kclas A untuk mcwadahi bcban kcrja yang besar dengan
jumlah beban kerja 10.000 atau lebih jarn kerja efektiI per tahun; dan
b. UPTD Kelas B untuk mewadahi beban kerja yang kecil denganjurulah
beban kerja 5.000 sampai dengan kurang dari 10.000 atau lebih jam
kerja efektif per tahun;
(4) Pembentukan U.PTD sebagaimana dirnaksud pada ayat (1) ditetapkan
dengan Peraturan Waiikota setelah dikonsultasikan secara tertulis
kepada Gubemur selaku WakiJPemerintah Pusat.
Bagian Kedelapan
Kelompok Jabatan Fungsional
Pasal 27
Pada masing-masing unit kerja di lingkungan Dinas dapat dibentuk
sejumlah kelornpok jabatan fungsionai sesuai dengan kebutuhan dan
berdasarkan ketentuan peraturan perundang-undangan.
Pasal 28
Jabatan Fungsional sebagaimana dimaksud dalam Pasal 27, adalah
sekelompok jabatan yang berisi fungsi dan tugas berkaitan dengan
pelayanan fungsional yang berdasarkan pada keahlian dan keterampilan
tertentu.

• lO •
Pasal 29
(J) Kelompok Jabatan Fungsional sebagaimana dimaksud dalam Pasal 12
huruf c, Pasal 16, Pasal 19, Pasal 22 dan Pasal 25 terdiri dari sejumlab
Aparatur SipiJ Negara dalam jenjang jabatan fungsional yang terbagi
dalam berbagai kelompok sesuai bidang keahliannya.
(2) Jabatan FungsionaJ sebagaimana dimaksud pada ayat (11 dipimpin oleh
sub koordinator sesuai dengan ruang lingkup bidang tugas dan
fungsinya.
(3) Sub Koordinator sebagaimana dimaksud pada ayat (1), berada di bawab
dan bertanggungjawab kepada pejabat di atasnya.
(4) Sub Koordinator sebagaimana dimaksud pada ayat (3), memhantu
pimpinan dalam penyusunan rencana, pelaksanaan dan pengendalian,
pemantuan dan evaluasi serta pelaporan pada satu kelompok sub
substansi.
(5) Ketentuan lebih lanjut mengenai penjabara.n tugas dan fungsi kelompok
sub substansi dan sub koordinator ditetapkan dengan Keputusan
Walikota.
BABV
TATAKERJA
Pasal 30
Dalam melaksanakan
rugas setiap pimpinan dan kelornpok jabatan
fungsional wajib menerapkan prinsip koordinasi, integrasi dan sinkronisasi
baik dalam lingkungan masing-masing maupun antar satuan organisasi di
lingkungan Dinas serta dengan instansi lain di Iuar Dinas sesuai dengan
tugas masing-masing.
Pasal 31
(ll Setiap pirnpinan satuan organisasi wajib mengawasi bawahannya
masing-masing dan apabila terjadi penyirnpangan agar rnengambil
langkah yang diperlukan sesuai dengan ketentuan Peraturan PerundangUndangan.
(2) Setiap pimpinan satuan organisasi dalarn Ungkungan satuan kerja
bertanggung jawab rnernirnpin dan rnengoordinasikan bawahannya serta
memberikan bimbingan dan petunjuk dalam pelaksanaan tugas.
(3) Setiap pimpinan satuan organisasi wajib mengikuti dan mematuhi
potunjuk dan bertanggung jawab kepada atasan masing-masing dan
menyarnpaikan laporan secara berkaJa.
(4) Setiap laporan yang diterima oleh pimpinan satuan organisasi dari
bawahannya wajih dio1ah dan dipergu nakan sehagai bahan untuk
penyusunan laporan lebih lanjut. dan untuk ruernberikan petunjuk
kepada bawahan.
(5) Dalam menyampaikan laporan masing-masing kepada atasan, tembusa.n
laporan wajib disampaikan kepada satuan organisaai lain yang secara
fungsional mempunayi hubungan kerja.
(6) Dalam melaksanakan tugsanya setiap pimpinan organisasi dibantu oleh
kepala satuan organisasi di bawahnya dan dalam rangka pemberian
birnbingan kepada bawahannya rnaeing-masing wajib mengadakan rapat
berkala.
Pasal 32
(1) Dalam ha! Kepala Dinas berhalangan, Sekretaris rnelakukan tug_asKepala
Dinas sesuai dengan peraturan perundang-undangan yang berlaku.

•
• 1I •
(2) Dalam ha! Sekretaris berhalangan sebagai pelaksana Kepala Dinas dapat
menunjuk Kepala Bidang untuk mewakili Kepala Dinas.
Pasal 33
Atas dasar pertimbangan daya guna dan haail guna masing-masing pejabat
dalam lingkungan Dinas dapat mendelegaslkan kewenangan tertentu kepada
pejabar di bawahnya sesuai dengan ketentuan yang berlaku.
BAB VI
PENGANGKATAN,PEMBERHENTIAN,KEPANGKATAN,
DAN ESELONISASI DALAM JABATAN
Pasal34
( 1) Kepala Dinas diangkat dan diberhentikan oleh Menreri Dalam Negcri
melalui Dirjen Kependudukan dan Pencatatan Sipil atas usul Walikota.
(2) Sekretaris, Kepala Bidang, Kcpala Sub Bagi.an diangkat dan
diberhentikan oleh Wal!kota atas usul KepaJa Dinas rnelalui Sekretaris
Daerah.
(3) Sub Koordinator ditetapkan oleh Kepala Dinas.
(4) Kepala Dinas merupakan jabatan eselon Ilb atau Jabatan Pirnpinan
Tinggi Pratama.
(5) Sekretaris rnerupakanjabatan eselon Illa atau Jabatan Administrator
(6) Kepala Bidang merupakan jabatan
eselon lllb atau Jabatan
Administrator.
(7) Kepala Sub Bagian rnerupakan jabatan eselon !Va atau Jabatan
Pengawas.
(8) Sub Koordinator merupakan Pejabal Fungsional Ahli Muda.
(9) Kepangkatan, pengangkatan dan pemberhentian dalam jabatan
struktural di lingkungan Dinas, berpedoman pada ketentuan peraturan
perundang-undangan.
BAB VII
KETENTUAN PERALIHAN
Pasal 35
Pada saat mulai berlakunya Peraturan Walikota ini, UP'l'D tetap
melaksanakan tugasnya sampai dengan Peraturan Walikota tentang
Pembentukan, Susunan Organisast, Tugas dan Fungsi serta Tata Kerja
UPTDyang baru diundangkan.
BAB VIII
KETENTUAN PENUTUP
Pasal 36
Pada saat Peraturan Walikota ini mulai berlaku, maka Peraturan Walikota
Nomor 48 Tahun 2016 tenlaug Kedudukan, Susunan Organisasi, Tugas dan
Fungsi serta Tata Kerja Dinas Kependudukan dan Pencatatan Sipil Kota
Kendari (Berna Daerah Rota Kendari Tahun 2016 Nomor 48) dicabut dan
clinyatakan tidak berlaku.

•
'
.

- 12 Pasal 37
Peraturan Walikota ini rnulai berlaku pada tanggal diundangkan.
Agar seliap orang mengetahuinya, memerintahkan pengundangan Peraturan
Walikota mi dengan penempatannya dalam Berita Daerah Kota Kendari.
Ditetapkan di Kendari
pada tanggal, z s ~ I •
Diundangkan di Kendari
pada tanggal, :l.S - I -
2022
2022
.

#
'
- 13 LAMPI.RAN PERATURAN WALIKOTA KENDARI
NOMOR
1 '> TAHUN 2022
TANGGAL
: J2 <;
- 12022
BAGAN STRUKTUR ORGANISASI
DINAS KEPENDUDUKAN DAN PENCATATAN SIPU. KOTA KENDARI
li!i-
,.
SEKRfTAIUAT
I
~
-
l
SUB IW.ilAN
ICEUANGAN
SUO IAGIAN
UMUM DAN KEPEGAWAIAN
SUI KOOJt.DtNTOR OAN
K!LOMPOK lAIA.TAH
FUNGSlONAL
~
I
f
I
lli>!ING
llll>AHG
PENDUDUk
PllAYAIWl l'tNCATATAN
SIPIL
P!'UYAN.rfllDA'7'AIIAJI
I
I
I
lllDM<i
l'UOQflOLAANllll'P"NMr
AOMJNISnlASI
l<fl'CIIDUOUIWI
HlfllNAIIAHDAN
ICUl:itAYAN iffWAN
~
I
I
I
I
SUB KOORDINTOR DAH
KnOMPOKJABATAN
SUB KOORDINTOR DAN
ICELOl'IPOKJABATAN
l'UHGSIOHAI.

FUNGSONAL
SUB KOORDINTOA. DAN
tCEl.OMPOJCJAB,\TAN
SUD KOOflDJJfTOA DAN
K!J..OMPOkJAJSATA
N
fUNGSfOHAL
FUNGSlONAL
I
I
[
[
I
UPTD
PARAF
NO
1
2
3
4
1Ns1,1;As11
KOORDINASil
r.~ ~,\ ri:. ~ ~ f
~i-· N IIL~~·.!'.~l!!"':.....-1.-+-c:...---'
~"1·6~
u•,!T
I
I
I-
AK.ENDARI`;

// API Setup
const API_KEY = "AIzaSyBOVFKXNmvJ42MqrCJdRqUUxMP2z87KL_A";
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

const userData = {
  message: null,
  file: {
    data: null,
    mime_type: null,
  },
};

const chatHistory = [];
const initialInputHeight = messageInput.scrollHeight;

// Create message element with dynamic classes and return it
const createMessageElement = (content, ...classes) => {
  const div = document.createElement("div");
  div.classList.add("message", ...classes);
  div.innerHTML = content;
  return div;
};

// Generate bot response using API
const generateBotResponse = async (incomingMessageDiv) => {
  const messageElement = incomingMessageDiv.querySelector(".message-text");

  // Add user message to chat history
  chatHistory.push({
    role: "user",
    parts: [
      { text: userData.message },
      ...(userData.file.data ? [{ inline_data: userData.file }] : []),
    ],
  });

  // API request options
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: chatHistory,
    }),
  };
  // `${context}\nPertanyaan : ${userData.message}. Jawablah sesuai konteks di atas. JIka tahu tahu/mengerti jawab dengan "Maaf saya tidak mengerti. Coba tanyakan hal lain"`

  try {
    // Fetch bot response from API
    const response = await fetch(API_URL, requestOptions);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error.message);

    // Extract and display bot's response text
    const apiResponseText = data.candidates[0].content.parts[0].text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .trim();
    messageElement.innerText = apiResponseText;

    // Add bot response to chat history
    chatHistory.push({
      role: "model",
      parts: [{ text: userData.message }],
    });
  } catch (error) {
    // Handle error in API response
    console.log(error);
    messageElement.innerText = error.message;
    messageElement.style.color = "#ff0000";
  } finally {
    // Reset user's file data, removing thinking indicator and scroll chat to bottom
    userData.file = {};
    incomingMessageDiv.classList.remove("thinking");
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
  }
};

// Handle outgoing user messages
const handleOutgoingMessage = (e) => {
  e.preventDefault();
  userData.message = messageInput.value.trim();
  messageInput.value = "";
  fileUploadWrapper.classList.remove("file-uploaded");
  messageInput.dispatchEvent(new Event("input"));

  // Create and display user message
  const messageContent = `<div class="message-text"></div>
                          ${
                            userData.file.data
                              ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="attachment" />`
                              : ""
                          }`;
  const outgoingMessageDiv = createMessageElement(
    messageContent,
    "user-message"
  );
  outgoingMessageDiv.querySelector(".message-text").textContent =
    userData.message;
  chatBody.appendChild(outgoingMessageDiv);
  chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });

  // Simulate bot response with thinking indicator after a delay
  setTimeout(() => {
    const messageContent = `<svg
            class="bot-avatar"
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"
            ></path>
          </svg>
          <div class="message-text">
            <div class="thinking-indicator">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
          </div>`;
    const incomingMessageDiv = createMessageElement(
      messageContent,
      "bot-message",
      "thinking"
    );
    chatBody.appendChild(incomingMessageDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    generateBotResponse(incomingMessageDiv);
  }, 600);
};

// Handle enter key press for sending messages
messageInput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if (
    e.key === "Enter" &&
    userMessage &&
    !e.shiftKey &&
    window.innerWidth > 768
  ) {
    handleOutgoingMessage(e);
  }
});

// Adjust input field height dynamically
messageInput.addEventListener("input", () => {
  messageInput.style.height = `${initialInputHeight}px`;
  messageInput.style.height = `${messageInput.scrollHeight}px`;
  document.querySelector(".chat-form").style.borderRadius =
    messageInput.scrollHeight > initialInputHeight ? "15px" : "32px";
});

// Handle file input change and preview the selected file
fileInput.addEventListener("change", () => {
  const file = fileInput.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    fileUploadWrapper.querySelector("img").src = e.target.result;
    fileUploadWrapper.classList.add("file-uploaded");
    const base64String = e.target.result.split(",")[1];

    // Store file data in userData
    userData.file = {
      data: base64String,
      mime_type: file.type,
    };

    fileInput.value = "";
  };

  reader.readAsDataURL(file);
});

// Cancel file upload
fileCancelButton.addEventListener("click", () => {
  userData.file = {};
  fileUploadWrapper.classList.remove("file-uploaded");
});

// Initialize emoji picker and handle emoji selection
const picker = new EmojiMart.Picker({
  theme: "light",
  skinTonePosition: "none",
  previewPosition: "none",
  onEmojiSelect: (emoji) => {
    const { selectionStart: start, selectionEnd: end } = messageInput;
    messageInput.setRangeText(emoji.native, start, end, "end");
    messageInput.focus();
  },
  onClickOutside: (e) => {
    if (e.target.id === "emoji-picker") {
      document.body.classList.toggle("show-emoji-picker");
    } else {
      document.body.classList.remove("show-emoji-picker");
    }
  },
});

document.querySelector(".chat-form").appendChild(picker);

sendMessageButton.addEventListener("click", (e) => handleOutgoingMessage(e));
document.querySelector("#file-upload").addEventListener("click", () => {
  fileInput.click();
});
chatbotToggler.addEventListener("click", () => {
  document.body.classList.toggle("show-chatbot");
});
closeChatbot.addEventListener("click", () => {
  document.body.classList.remove("show-chatbot");
});
