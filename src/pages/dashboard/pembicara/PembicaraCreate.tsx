import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import Input from "../../../component/ui/Input";
import Button from "../../../component/ui/Button";

import { useAuthStore } from "../../../store/useAuthStore";

// SCHEMA
const schema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  role: z.string().min(3, "Role minimal 3 karakter"),
  image: z.string().min(3, "Image wajib diisi"),
});

type FormData = z.infer<typeof schema>;

export default function PembicaraCreate() {
  const navigate = useNavigate();

  const token = useAuthStore((state: any) => state.token);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // SUBMIT
  const onSubmit = async (data: FormData) => {
    try {
      // Mengubah URL localhost menjadi URL Backend Vercel asli
      const response = await fetch(
        "https://be-invofest-ten.vercel.app/pembicara",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Gagal tambah pembicara");
      }

      alert("Pembicara berhasil ditambahkan!");
      reset();
      navigate("/dashboard/pembicara");
    } catch (error) {
      console.log(error);
      alert("Gagal menambahkan pembicara");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#7B1D3F]">
            Tambah Pembicara
          </h1>
          <p className="text-gray-500 mt-2">
            Isi data pembicara untuk event
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            {/* NAMA */}
            <Input
              label="Nama Pembicara"
              name="name"
              type="text"
              placeholder="Masukkan nama pembicara"
              register={register}
              error={errors.name?.message}
            />

            {/* ROLE */}
            <Input
              label="Role Pembicara"
              name="role"
              type="text"
              placeholder="Masukkan role pembicara"
              register={register}
              error={errors.role?.message}
            />

            {/* IMAGE */}
            <Input
              label="Image URL"
              name="image"
              type="text"
              placeholder="Masukkan link image"
              register={register}
              error={errors.image?.message}
            />

            {/* BUTTON */}
            <div className="pt-2">
              <Button
                type="submit"
                title={
                  isSubmitting
                    ? "Menyimpan..."
                    : "Simpan"
                }
                variant="primary"
              />
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}