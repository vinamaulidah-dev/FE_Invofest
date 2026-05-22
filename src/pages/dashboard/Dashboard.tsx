import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAuthStore } from "../../store/useAuthStore";

export default function Dashboard() {

  // FETCH DATA
  useEffect(() => {

    useAuthStore.getState().fetchEvents();
    useAuthStore.getState().fetchCategories();
    useAuthStore.getState().fetchSpeakers();

  }, []);

  // DATA
  const categories = useAuthStore(
    (state: any) => state.categories
  );

  const events = useAuthStore(
    (state: any) => state.events
  );

  const speakers = useAuthStore(
    (state: any) => state.speakers
  );

  const user = useAuthStore(
    (state: any) => state.user
  );

  // STATS
  const stats = [
    {
      title: "Kategori",
      value: categories.length,
      path: "/dashboard/category",
    },
    {
      title: "Event",
      value: events.length,
      path: "/dashboard/event",
    },
    {
      title: "Pembicara",
      value: speakers.length,
      path: "/dashboard/pembicara",
    },
    {
      title: "Event Aktif",
      value: events.length,
      path: "/dashboard/event",
    },
  ];

  return (

    <div className="p-6 max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="flex items-start justify-between mb-6">

        <div>

          <h1 className="text-2xl font-bold mb-1 text-[#7B1D3F] tracking-tight">

            Dashboard

          </h1>

          <p className="text-gray-600">

            Selamat datang, {user || "Admin"}

          </p>

        </div>

      </div>

      {/* STATISTIK */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">

        {stats.map((item) => (

          <Link
            key={item.title}
            to={item.path}
          >

            <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">

              <p className="text-sm text-gray-500 mb-1">

                {item.title}

              </p>

              <p className="text-2xl font-bold text-[#7B1D3F]">

                {item.value}

              </p>

            </div>

          </Link>

        ))}

      </div>

      {/* BAWAH */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* EVENT */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="font-semibold mb-4 text-[#7B1D3F] text-lg">

            Event Terbaru

          </h2>

          <ul className="space-y-3">

            {events.slice(0, 3).map((item: any) => (

              <li
                key={item.id}
                className="border-b pb-3 last:border-none"
              >

                <p className="font-medium">

                  {item.name}

                </p>

                <p className="text-gray-400 text-sm">

                  {item.dateEvent
                    ? new Date(item.dateEvent).toLocaleDateString("id-ID")
                    : "-"}

                </p>

              </li>

            ))}

            {events.length === 0 && (

              <p className="text-gray-400 text-sm">

                Belum ada data event

              </p>

            )}

          </ul>

        </div>

        {/* PEMBICARA */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="font-semibold mb-4 text-[#7B1D3F] text-lg">

            Pembicara Terbaru

          </h2>

          <ul className="space-y-3">

            {speakers.slice(0, 3).map((item: any) => (

              <li
                key={item.id}
                className="border-b pb-3 last:border-none"
              >

                <p className="font-medium">

                  {item.name}

                </p>

                <p className="text-gray-400 text-sm">

                  {item.role}

                </p>

              </li>

            ))}

            {speakers.length === 0 && (

              <p className="text-gray-400 text-sm">

                Belum ada data pembicara

              </p>

            )}

          </ul>

        </div>

      </div>

    </div>

  );

}