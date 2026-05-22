import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "../../../store/useAuthStore";

interface Speaker {
  id: number;
  name: string;
  role: string;
  image: string;
}

// AVATAR
function Avatar({ name }: { name: string }) {

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (

    <div className="w-9 h-9 rounded-full bg-[#7B1D3F] text-white text-xs font-bold flex items-center justify-center">

      {initials}

    </div>

  );

}

export default function PembicaraIndex() {

  const navigate = useNavigate();

  // ZUSTAND STORE
  const speakers = useAuthStore(
    (state: any) => state.speakers
  );

  const fetchSpeakers = useAuthStore(
    (state: any) => state.fetchSpeakers
  );

  const deleteSpeaker = useAuthStore(
    (state: any) => state.deleteSpeaker
  );

  const isLoading = useAuthStore(
    (state: any) => state.isLoading
  );

  // FETCH DATA
  useEffect(() => {

    fetchSpeakers();

  }, []);

  // DELETE
  const handleDelete = async (
    id: number,
    name: string
  ) => {

    const confirmDelete = window.confirm(
      `Yakin ingin menghapus pembicara "${name}" ?`
    );

    if (confirmDelete) {

      const success = await deleteSpeaker(id);

      if (!success) {

        alert("Gagal menghapus pembicara");

      }

    }

  };

  return (

    <div className="px-10 py-10 max-w-5xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="text-2xl font-bold text-[#7B1D3F]">

            Pembicara

          </h1>

          <p className="text-sm text-gray-400">

            Kelola pembicara event

          </p>

        </div>

        <Link
          to="/dashboard/pembicara/create"
          className="bg-[#7B1D3F] text-white px-4 py-2 rounded-lg shadow hover:bg-[#5a152e]"
        >

          Tambah

        </Link>

      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-lg p-4 overflow-x-auto">

        <table className="w-full text-sm">

          {/* HEAD */}
          <thead>

            <tr className="text-gray-400 text-xs uppercase">

              <th className="px-4 py-3 text-left">
                No
              </th>

              <th className="px-4 py-3 text-left">
                Nama
              </th>

              <th className="px-4 py-3 text-left">
                Role
              </th>

              <th className="px-4 py-3 text-left">
                Image
              </th>

              <th className="px-4 py-3 text-left">
                Aksi
              </th>

            </tr>

          </thead>

          {/* BODY */}
          <tbody>

            {/* LOADING */}
            {isLoading && (

              <tr>

                <td
                  colSpan={5}
                  className="text-center py-10 text-gray-400"
                >

                  Loading...

                </td>

              </tr>

            )}

            {/* DATA */}
            {!isLoading &&
              speakers?.map(
                (
                  item: Speaker,
                  index: number
                ) => (

                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 border-b"
                  >

                    {/* NO */}
                    <td className="px-4 py-4 text-gray-400">

                      {index + 1}

                    </td>

                    {/* NAMA */}
                    <td className="px-4 py-4">

                      <div className="flex items-center gap-3">

                        <Avatar name={item.name} />

                        <span className="font-semibold text-[#1a0a10]">

                          {item.name}

                        </span>

                      </div>

                    </td>

                    {/* ROLE */}
                    <td className="px-4 py-4">

                      <span className="bg-gray-100 px-3 py-1 rounded-md text-xs">

                        {item.role}

                      </span>

                    </td>

                    {/* IMAGE */}
                    <td className="px-4 py-4">

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover border"
                      />

                    </td>

                    {/* AKSI */}
                    <td className="px-4 py-4">

                      <div className="flex gap-2">

                        {/* EDIT */}
                        <button
                          onClick={() =>
                            navigate(
                              `/dashboard/pembicara/edit/${item.id}`
                            )
                          }
                          className="px-3 py-1 text-xs rounded-md bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
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
                          className="px-3 py-1 text-xs rounded-md bg-red-100 text-red-600 hover:bg-red-200"
                        >

                          Hapus

                        </button>

                      </div>

                    </td>

                  </tr>

                )
              )}

          </tbody>

        </table>

        {/* EMPTY */}
        {!isLoading &&
          speakers?.length === 0 && (

            <div className="flex flex-col items-center justify-center py-14 bg-white">

              <p className="text-sm text-gray-400 font-medium">

                Belum ada data pembicara

              </p>

            </div>

          )}

        {/* FOOTER */}
        <div className="mt-4 text-xs text-gray-400">

          Total: {speakers?.length || 0} pembicara

        </div>

      </div>

    </div>

  );

}