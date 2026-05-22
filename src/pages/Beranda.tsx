export default function Beranda() {
  const faqItems = [
    { title: "Apa itu INVOFEST?", description: "Invofest (Informatics Vocational Festival) adalah festival tahunan yang diakan oleh program studi sarjana terapan teknik informatika Universitas Harkat Negeri, yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital." },
    { title: "Bagaimana saya mengetahui pemenang kompetisi?", description: "Pemenang akan diinformasikan melalui media sosial instagram dari invofest @invofest_harkatnegeri." },
    { title: "Kapan dan dimana INVOFEST dilaksanakan?", description: "INVOFEST diselenggarakan mulai tanggal 21 Oktober 2025 sampai dengan tanggal 27 November 2025. Untuk acara workshop, seminar, talkshow diadakan secara Offline di kampus 1 Universitas Harkat Negeri dan kompetisi diadakan secara Online." },
    { title: "Apa yang didapat pemenang dalam kompetisi?", description: "Pemenang kompetisi akan mendapatkan hadiah trophy, uang pembinaan, dan e-sertifikat."},
    { title: "Apakah ada biaya pendaftaran di INVOFEST?", description: "Semua kegiatan dipastikan berbayar ya teman-teman." },
    { title: "Bagaimana cara mendaftar event?", description: "Buka https://www.invofest-harkatnegeri.com lalu pergi ke halaman event yang anda ingin ikuti atau scroll kebagian bawah halaman beranda dengan klik mendaftar pada salah satu eventnya, jika sudah maka diarahkan ke halaman detail event dan klik tombol 'Registrasi' maka akan diarahkan ke google form pengisian pendaftaran event yang diikuti." },
  ];

  const eventSections = [
    {
      title: "IT Seminar",
      desc: `Seminar Nasional Teknologi Informasi ini mengangkat tema "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif." Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas tuntas bagaimana kita dapat merancang sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas manusia—bukan sebagai pengganti.`,
      btnLabel: "DAFTAR IT SEMINAR",
      mascot: "https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png",
      mascotAlt: "Mascot Seminar",
      mascotLeft: false,
      bg: "white",
    },
    {
      title: "IT Talkshow",
      desc: `Talkshow berskala nasional: "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan." Acara ini dirancang bukan untuk membahas teknologi sebagai entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi menjadi mitra kolaboratif yang memperkuat potensi unik manusia.`,
      btnLabel: "DAFTAR IT TALKSHOW",
      mascot: "https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png",
      mascotAlt: "Mascot Talkshow",
      mascotLeft: true,
      bg: "pink",
    },
    {
      title: "IT Workshop",
      desc: `Workshop "AI for a Sustainable Future: The Role of Z Generation in the Digital Era" ini menjembatani antara potensi Generasi Z dan kekuatan AI untuk menciptakan masa depan yang berkelanjutan. Peserta akan dibekali wawasan dan alat untuk mentransformasi ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur di era digital.`,
      btnLabel: "DAFTAR IT WORKSHOP",
      mascot: "https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png",
      mascotAlt: "Mascot Workshop",
      mascotLeft: false,
      bg: "white",
    },
    {
      title: "IT Competition",
      desc: `"From Creation to Innovation" adalah sebuah kompetisi IT yang dirancang untuk menjembatani jurang antara ide kreatif dan inovasi nyata. Ajang ini menantang para talenta digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi juga mengembangkannya menjadi solusi yang berdampak, berkelanjutan, dan bernilai guna tinggi.`,
      btnLabel: "DAFTAR IT COMPETITION",
      mascot: "https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png",
      mascotAlt: "Mascot Competition",
      mascotLeft: true,
      bg: "pink",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── 1. HERO ── */}
      <section className="flex flex-col md:flex-row items-center justify-between px-16 py-20 max-w-6xl mx-auto">
        <div className="max-w-lg">
          <h1 className="text-5xl font-black text-[#7B1D3F] mb-5">
            INV<span className="text-[#7B1D3F]">O</span>FEST
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan
            untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi
            era digital. Dengan mengusung tema{" "}
            <strong>"Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow"</strong>.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#7B1D3F] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#5a1530] transition-colors duration-200">
              INFO SELENGKAPNYA
            </button>
            <button className="border-2 border-[#7B1D3F] text-[#7B1D3F] text-sm font-semibold px-6 py-3 rounded hover:bg-[#7B1D3F] hover:text-white transition-all duration-200">
              HUBUNGI PANITIA
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0 flex-shrink-0">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt="INVOFEST Mascot"
            className="w-80 h-80 object-contain drop-shadow-xl"
          />
        </div>
      </section>

      {/* ── 2. TENTANG INVOFEST ── */}
      <section className="relative bg-[#fce8ef] overflow-hidden">
        <div className="absolute top-0 left-0 w-full rotate-0">
          <svg viewBox="0 0 1440 60" fill="white"><path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"/></svg>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-8 py-24">
          <h2 className="text-3xl font-bold text-[#7B1D3F] mb-4">Tentang INVOFEST</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Invofest 2025 menghadirkan berbagai kegiatan menarik seperti kompetisi IT,
            workshop IT, dan seminar nasional &amp; talkshow dengan para ahli teknologi untuk
            menginspirasi dan memberdayakan generasi muda Indonesia.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {eventSections.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-[#7B1D3F] mb-2 text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
                <button className="mt-4 bg-[#7B1D3F] text-white text-xs font-bold px-4 py-2 rounded hover:bg-[#5a1530]">
                  DETAIL
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full rotate-180">
          <svg viewBox="0 0 1440 60" fill="white"><path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z"/></svg>
        </div>
      </section>

      {/* ── 3. EVENT SECTIONS ── */}
      {eventSections.map((ev) => (
        <section key={ev.title} className={`py-20 ${ev.bg === "pink" ? "bg-[#fce8ef]" : "bg-white"}`}>
          <div className={`max-w-5xl mx-auto px-12 flex flex-col md:flex-row items-center gap-10 ${ev.mascotLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <img src={ev.mascot} alt={ev.title} className="w-64 h-64 object-contain drop-shadow-xl" />
            <div className="max-w-md">
              <h2 className="text-3xl font-bold text-[#7B1D3F] mb-4">{ev.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">{ev.desc}</p>
              <button className="bg-[#7B1D3F] text-white text-xs font-bold px-6 py-3 rounded hover:bg-[#5a1530]">
                {ev.btnLabel}
              </button>
            </div>
          </div>
        </section>
      ))}

      {/* ── 4. FAQ ── */}
      <section className="py-20 px-8 max-w-5xl mx-auto text-center">
        <p className="text-gray-400 text-sm mb-1 tracking-widest uppercase">FAQ</p>
        <h2 className="text-3xl font-bold text-gray-800">Punya Pertanyaan? Lihat <span className="text-[#7B1D3F]">Disini</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {faqItems.map((item, i) => (
            <details key={i} className="border-2 border-[#7B1D3F] rounded-lg px-5 py-4 text-left cursor-pointer group">
              <summary className="flex items-center gap-3 text-gray-700 font-medium text-sm list-none">
                <span className="text-[#7B1D3F] font-bold group-open:rotate-180 transition-transform">▼</span>
                {item.title}
              </summary>
              <p className="mt-3 text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}