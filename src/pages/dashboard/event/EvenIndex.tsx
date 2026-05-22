import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../store/useAuthStore";

interface CategoryItem {
  id: string;
  name: string;
}

export default function EventIndex() {
  const navigate = useNavigate();

  const {
    events,
    categories,
    fetchEvents,
    fetchCategories,
    deleteEvent,
    isLoading,
  } = useAuthStore();

  // AMBIL DATA EVENT + CATEGORY
  useEffect(() => {
    fetchEvents();
    fetchCategories();
  }, []);

  const handleDelete = async (
    id: string,
    name: string
  ) => {
    const confirmDelete = confirm(
      `Yakin ingin menghapus event "${name}" ?`
    );

    if (confirmDelete) {
      const success = await deleteEvent(id);

      if (!success) {
        alert("Gagal menghapus event");
      }
    }
  };

  return (
    <div className="p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h1 className="text-2xl font-bold">
            Data Event
          </h1>

          <p className="text-gray-500 text-sm mt-1">
            Kelola semua data event
          </p>
        </div>

        <button
          onClick={() =>
            navigate("/dashboard/event/create")
          }
          className="bg-[#7B1D3F] hover:bg-[#9e2550] text-white px-4 py-2 rounded-lg"
        >
          + Tambah Event
        </button>
      </div>

      {/* LOADING */}
      {isLoading && (
        <p className="text-gray-500">
          Loading data event...
        </p>
      )}

      {/* EMPTY */}
      {!isLoading && events.length === 0 && (
        <div className="bg-white border rounded-xl p-10 text-center">
          <p className="text-gray-500">
            Belum ada data event
          </p>
        </div>
      )}

      {/* TABLE */}
      {!isLoading && events.length > 0 && (
        <div className="bg-white rounded-xl border overflow-hidden">

          <table className="w-full">

            <thead className="bg-gray-100">
              <tr>
                <th className="text-left px-4 py-3">
                  No
                </th>

                <th className="text-left px-4 py-3">
                  Nama Event
                </th>

                <th className="text-left px-4 py-3">
                  Category
                </th>

                <th className="text-left px-4 py-3">
                  Tanggal
                </th>

                <th className="text-left px-4 py-3">
                  Lokasi
                </th>

                <th className="text-left px-4 py-3">
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody>
              {events.map((item: any, index: number) => (
                <tr
                  key={item.id}
                  className="border-t"
                >

                  {/* NO */}
                  <td className="px-4 py-3">
                    {index + 1}
                  </td>

                  {/* NAME */}
                  <td className="px-4 py-3 font-medium">
                    {item.name}
                  </td>

                  {/* CATEGORY */}
                  <td className="px-4 py-3">
                    <span className="bg-rose-100 text-[#7B1D3F] px-2 py-1 rounded text-xs">

                      {
                        categories.find(
                          (cat: CategoryItem) =>
                            String(cat.id) ===
                            String(item.categoryId)
                        )?.name || "-"
                      }

                    </span>
                  </td>

                  {/* DATE */}
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {item.dateEvent
                      ? new Date(
                          item.dateEvent
                        ).toLocaleDateString("id-ID")
                      : "-"}
                  </td>

                  {/* LOCATION */}
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {item.location}
                  </td>

                  {/* ACTION */}
                  <td className="px-4 py-3">
                    <div className="flex gap-2">

                      {/* EDIT */}
                      <button
                        onClick={() =>
                          navigate(
                            `/dashboard/event/edit/${item.id}`
                          )
                        }
                        className="px-3 py-1 bg-yellow-500 text-white rounded"
                      >
                        Edit
                      </button>

                      {/* DELETE */}
                      <button
                        onClick={() =>
                          handleDelete(
                            item.id,
                            item.name
                          )
                        }
                        className="px-3 py-1 bg-red-500 text-white rounded"
                      >
                        Hapus
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}