import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";

interface Category {
  id: string;
  name: string;
}

export default function CategoryIndex() {

  const {
    categories,
    fetchCategories,
    deleteCategory,
    isLoading,
  } = useAuthStore();

  // FETCH DATA CATEGORY
  useEffect(() => {
    fetchCategories();
  }, []);

  // DELETE
  const handleDelete = async (
    id: string,
    name: string
  ) => {

    const confirmDelete = confirm(
      `Yakin ingin menghapus kategori "${name}" ?`
    );

    if (confirmDelete) {
      const success = await deleteCategory(id);

      if (!success) {
        alert("Gagal menghapus kategori");
      }
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-bold text-[#7B1D3F]">
            Data Kategori
          </h1>

          <p className="text-sm text-gray-500">
            Kelola kategori event kamu
          </p>
        </div>

        <Link
          to="/dashboard/category/create"
          className="bg-[#7B1D3F] text-white px-5 py-2 rounded-xl shadow-md hover:bg-[#5a152e] transition"
        >
          + Tambah
        </Link>

      </div>

      {/* LOADING */}
      {isLoading && (
        <p className="text-gray-500">
          Loading kategori...
        </p>
      )}

      {/* EMPTY */}
      {!isLoading && categories.length === 0 && (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 text-center">

          <p className="text-gray-500">
            Belum ada kategori
          </p>

        </div>
      )}

      {/* LIST */}
      {!isLoading && categories.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6">

          {/* LIST CATEGORY */}
          <div className="md:col-span-2 space-y-4">

            {categories.map((item: Category) => (

              <div
                key={item.id}
                className="bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex justify-between items-center hover:scale-[1.01] transition"
              >

                {/* LEFT */}
                <div>

                  <h2 className="font-semibold text-lg text-[#1a0a10]">
                    {item.name}
                  </h2>

                  <div className="mt-2">

                    <span className="text-xs px-3 py-1 rounded-full font-semibold bg-green-100 text-green-700">
                      Aktif
                    </span>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="flex gap-2">

                  {/* EDIT */}
                  <Link
                    to={`/dashboard/category/edit/${item.id}`}
                    className="px-3 py-1.5 text-sm rounded-lg bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition"
                  >
                    Edit
                  </Link>

                  {/* DELETE */}
                  <button
                    onClick={() =>
                      handleDelete(
                        item.id,
                        item.name
                      )
                    }
                    className="px-3 py-1.5 text-sm rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                  >
                    Hapus
                  </button>

                </div>

              </div>
            ))}

          </div>

          {/* SIDE INFO */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-5 h-fit">

            <h3 className="font-semibold text-[#7B1D3F] mb-3">
              Ringkasan
            </h3>

            <div className="space-y-3 text-sm">

              <div className="flex justify-between">
                <span>Total Kategori</span>

                <span className="font-bold">
                  {categories.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Status</span>

                <span className="text-green-600 font-semibold">
                  Semua Aktif
                </span>
              </div>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}