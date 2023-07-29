import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { PostProps } from "@/types/postProps";
import { Head, router } from "@inertiajs/react";
import { useFormData, FormProps } from "@/hooks/useFormData";
import RedirectButton from "@/Components/RedirectButton";
import { Button } from "@/Components/Button";
import { Input } from "@/Components/Input";
import { Controller } from "react-hook-form";
import { QuillEditor } from "@/Components/QuillEditor";

export default function Edit({ auth, post }: PageProps & { post: PostProps }) {
    const { register, handleSubmit, errors, control } = useFormData();

    const handleForm = (data: FormProps) => {
        router.patch(`/posts/${post.id}`, data);
    };

    const handleDelete = () => {
        router.delete(`/posts/${post.id}`);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Editar post" />
            <form
                onSubmit={handleSubmit(handleForm)}
                className="max-w-7xl px-8 mx-auto pt-10 pb-8"
            >
                <Input
                    label="Slug"
                    type="text"
                    {...register("slug")}
                    placeholder="Slug"
                    defaultValue={post?.slug}
                    error={errors?.slug?.message}
                />
                <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                        <QuillEditor
                            value={post?.description}
                            label="Descrição"
                            error={errors?.description?.message}
                            onChange={field.onChange}
                        />
                    )}
                />
                <div className="flex gap-4 flex-wrap">
                    <Button type="submit">Salvar Alterações</Button>
                    <RedirectButton path="/posts">Cancelar</RedirectButton>
                    <Button type="button" handleDelete={handleDelete}>
                        Exluir
                    </Button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
