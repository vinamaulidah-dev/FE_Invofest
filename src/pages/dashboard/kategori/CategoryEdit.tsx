import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function CategoryEdit() {
  const { id } = useParams<{ id: string }>(); // Mengambil ID dari URL (misal angka 1)
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  // 1. AMBIL DATA KATEGORI LAMA DARI BACKEND SAAT HALAMAN DIBUKA
  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/categories/${id}`);
        if (!response.ok) throw new Error("Gagal mengambil data kategori");
        
        const data = await response.json();
        setName(data.name); // Masukkan nama lama ke dalam input form
      } catch (error) {
        console.error(error);
        alert("Kategori tidak ditemukan atau server bermasalah.");
        navigate("/dashboard/category"); // Kembalikan ke halaman daftar jika eror
      } finally {
        setIsFetching(false);
      }
    };

    if (id) fetchCategoryData();
  }, [id, navigate]);

  // 2. LOGIKA KIRIM PERUBAHAN DATA (PUT) KE BACKEND PAS DIKLIK SIMPAN
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return alert("Nama kategori tidak boleh kosong!");

    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3000/categories/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) throw new Error("Gagal mengupdate database");

      alert("Kategori berhasil diperbarui!");
      navigate("/dashboard/category");
    } catch (error) {
      console.error(error);
      alert("Gagal memperbarui kategori, silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-500 animate-pulse text-sm">Sedang memuat data kategori...</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md border border-slate-100 mt-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#7B1D3F]">Edit Kategori</h1>
        <p className="text-sm text-gray-400 mt-1">Ubah nama kategori sesuai kebutuhan proyek kelompok kalian</p>
      </div>

      <form onSubmit={handleUpdate} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nama Kategori
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Masukkan nama kategori baru..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#7B1D3F] focus:border-transparent transition-all"
            required
          />
        </div>

        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="flex-1 bg-[#7B1D3F] text-white py-3 rounded-lg font-bold hover:bg-[#5a1530] transition-all disabled:bg-gray-300"
          >
            {isLoading ? "Menyimpan..." : "Simpan Perubahan"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/dashboard/category/")}
            className="flex-1 bg-white text-gray-700 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-all"
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
}