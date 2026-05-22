import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../component/ui/Input";
import Button from "../../../component/ui/Button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  name: z.string().min(3, "Nama event harus di isi"),
  location: z.string().min(3, "Lokasi harus di isi"),
  dateEvent: z.string().min(1, "Tanggal harus di isi"),
  description: z.string().min(5, "Deskripsi harus di isi"),
  categoryId: z.string().min(1, "Kategori harus dipilih"),
  speakerId: z.string().min(1, "Speaker harus dipilih"),
});

type FormData = z.infer<typeof schema>;

interface CategoryItem {
  id: string;
  name: string;
}

interface SpeakerItem {
  id: string;
  name: string;
}

export default function EventCreate() {
  const navigate = useNavigate();

  const createEvent = useAuthStore((s: any) => s.createEvent);

  const categories = useAuthStore((s: any) => s.categories);
  const speakers = useAuthStore((s: any) => s.speakers);

  const fetchCategories = useAuthStore(
    (s: any) => s.fetchCategories
  );

  const fetchSpeakers = useAuthStore(
    (s: any) => s.fetchSpeakers
  );

  useEffect(() => {
    fetchCategories();
    fetchSpeakers();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const payload = {
        name: data.name,
        location: data.location,
        dateEvent: data.dateEvent,
        description: data.description,
        categoryId: data.categoryId,
        speakerId: data.speakerId,
      };

      console.log("PAYLOAD EVENT:", payload);

      const success = await createEvent(payload);

      if (success) {
        alert("Event berhasil ditambahkan");
        navigate("/dashboard/event");
      } else {
        alert("Gagal menambah event");
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menyimpan event");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#7B1D3F]">
            Tambah Event
          </h1>

          <p className="text-gray-500 mt-2">
            Tambahkan event baru ke dalam sistem
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

            {/* NAMA EVENT */}
            <Input
              label="Nama Event"
              name="name"
              placeholder="Masukkan nama event"
              register={register}
              error={errors.name?.message}
            />

            {/* CATEGORY */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-sm">
                Category
              </label>

              <select
                {...register("categoryId")}
                className="border rounded-lg px-3 py-2"
              >
                <option value="">
                  Pilih Category
                </option>

                {categories?.map((cat: CategoryItem) => (
                  <option
                    key={cat.id}
                    value={cat.id}
                  >
                    {cat.name}
                  </option>
                ))}
              </select>

              {errors.categoryId && (
                <p className="text-red-500 text-sm">
                  {errors.categoryId.message}
                </p>
              )}
            </div>

            {/* SPEAKER */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-sm">
                Speaker
              </label>

              <select
                {...register("speakerId")}
                className="border rounded-lg px-3 py-2"
              >
                <option value="">
                  Pilih Speaker
                </option>

                {speakers?.map((speaker: SpeakerItem) => (
                  <option
                    key={speaker.id}
                    value={speaker.id}
                  >
                    {speaker.name}
                  </option>
                ))}
              </select>

              {errors.speakerId && (
                <p className="text-red-500 text-sm">
                  {errors.speakerId.message}
                </p>
              )}
            </div>

            {/* LOCATION */}
            <Input
              label="Lokasi"
              name="location"
              placeholder="Masukkan lokasi event"
              register={register}
              error={errors.location?.message}
            />

            {/* DATE */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-sm">
                Tanggal Event
              </label>

              <input
                type="date"
                {...register("dateEvent")}
                className="border rounded-lg px-3 py-2"
              />

              {errors.dateEvent && (
                <p className="text-red-500 text-sm">
                  {errors.dateEvent.message}
                </p>
              )}
            </div>

            {/* DESCRIPTION */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-sm">
                Description
              </label>

              <textarea
                {...register("description")}
                rows={4}
                placeholder="Masukkan deskripsi event"
                className="border rounded-lg px-3 py-2"
              />

              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* BUTTON */}
            <div className="pt-4">
              <Button
                title={
                  isSubmitting
                    ? "Menyimpan..."
                    : "Simpan"
                }
                type="submit"
                variant="primary"
              />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}