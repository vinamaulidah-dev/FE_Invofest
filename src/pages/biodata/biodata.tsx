import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  BookUser,
  School,
  Globe,
} from "lucide-react";

export default function Biodata() {
  const dataMahasiswa = {
    nama: "Vina Maulidah",
    status: "Mahasiswa TI Semester 4",
    nim: "24090014",
    alamat: "Yamansari Kec. Lebaksiu Kab. Tegal",
    email: "vinamaulidah27@gmail.com",
    universitas: "Universitas Harkat Negeri",
    telepon: "0858-6623-3445",
    prodi: "Teknik Informatika",
    github: "https://github.com/vinamaulidah-dev?tab=repositories",
    vercel: "https://vercel.com/new?teamSlug=vinamaulidah27-8649s-projects",
  };

  return (
    <div className="min-h-[80vh] bg-gray-50 p-6 flex justify-center items-start">

      {/* CARD UTAMA */}
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

        {/* TOP SECTION */}
        <div className="bg-gradient-to-r from-[#7A1C3D] to-[#A52A5A] px-10 py-10 flex flex-col md:flex-row items-center gap-6">

          <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-lg shrink-0">
            <User size={55} className="text-[#7A1C3D]" />
          </div>

          <div className="text-white text-center md:text-left">
            <h1 className="text-3xl font-bold">{dataMahasiswa.nama}</h1>
            <p className="text-rose-100/90 text-lg mt-1">
              {dataMahasiswa.status}
            </p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">

          {/* NIM */}
          <div className="flex items-start gap-4 border-b pb-5">
            <BookUser className="text-[#7A1C3D]" />
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase">NIM</h3>
              <p className="text-gray-800 font-semibold">{dataMahasiswa.nim}</p>
            </div>
          </div>

          {/* ALAMAT */}
          <div className="flex items-start gap-4 border-b pb-5">
            <MapPin className="text-[#7A1C3D]" />
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase">Alamat</h3>
              <p className="text-gray-800 font-semibold">{dataMahasiswa.alamat}</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-4 border-b pb-5">
            <Mail className="text-[#7A1C3D]" />
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase">Email</h3>
              <p className="text-gray-800 font-semibold">{dataMahasiswa.email}</p>
            </div>
          </div>

          {/* UNIVERSITAS */}
          <div className="flex items-start gap-4 border-b pb-5">
            <School className="text-[#7A1C3D]" />
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase">Universitas</h3>
              <p className="text-gray-800 font-semibold">{dataMahasiswa.universitas}</p>
            </div>
          </div>

          {/* TELEPON */}
          <div className="flex items-start gap-4 border-b pb-5">
            <Phone className="text-[#7A1C3D]" />
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase">Telepon</h3>
              <p className="text-gray-800 font-semibold">{dataMahasiswa.telepon}</p>
            </div>
          </div>

          {/* PRODI */}
          <div className="flex items-start gap-4 border-b pb-5">
            <GraduationCap className="text-[#7A1C3D]" />
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase">Prodi</h3>
              <p className="text-gray-800 font-semibold">{dataMahasiswa.prodi}</p>
            </div>
          </div>

          {/* GITHUB */}
          <div className="flex items-start gap-4 border-b pb-5">
            <Globe className="text-[#7A1C3D]" />
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase">GitHub</h3>
              <a
                href={dataMahasiswa.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#7A1C3D] font-semibold hover:underline"
              >
                Lihat GitHub
              </a>
            </div>
          </div>

          {/* VERCEL */}
          <div className="flex items-start gap-4 border-b pb-5">
            <Globe className="text-[#7A1C3D]" />
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase">Vercel</h3>
              <a
                href={dataMahasiswa.vercel}
                target="_blank"
                rel="noreferrer"
                className="text-[#7A1C3D] font-semibold hover:underline"
              >
                Buka Website
              </a>
            </div>
          </div>

        </div>

        {/* FOOTER */}
        <div className="text-center text-[11px] text-gray-400 pb-6">
          Aplikasi ini dibuat untuk tugas UTS Genap 2025/2026
        </div>

      </div>
    </div>
  );
}