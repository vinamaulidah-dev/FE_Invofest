import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import Input from "../../../component/ui/Input";
import Button from "../../../component/ui/Button";
import { useAuthStore } from "../../../store/useAuthStore";

const schema = z.object({
  name: z.string().min(3, "Nama kategori minimal 3 karakter"),
});

type FormData = z.infer<typeof schema>;

export default function CategoryCreate() {
  const navigate = useNavigate();

  const createCategory = useAuthStore(
    (s: any) => s.createCategory
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {

    const success = await createCategory(
      data.name
    );

    if (success) {
      alert("Kategori berhasil dibuat!");

      navigate("/dashboard/category");
    } else {
      alert("Gagal membuat kategori");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

      <div className="max-w-2xl mx-auto">

        {/* HEADER */}
        <div className="mb-8">

          <h1 className="text-3xl font-bold text-[#7B1D3F]">
            Tambah Kategori
          </h1>

          <p className="text-gray-500 mt-2">
            Isi data kategori event kamu
          </p>

        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >

            {/* INPUT NAMA */}
            <Input
              label="Nama Category"
              name="name"
              placeholder="Masukkan nama category"
              register={register}
              error={errors.name?.message}
            />

            {/* BUTTON */}
            <div className="pt-2">

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