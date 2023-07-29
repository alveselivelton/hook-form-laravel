import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, router } from "@inertiajs/react";
import { FormProps, useFormData } from "@/hooks/useFormData";
import { Button } from "@/Components/Button";
import { Input } from "@/Components/Input";
import { Controller } from "react-hook-form";
import { QuillEditor } from "@/Components/QuillEditor";

export default function Create({ auth }: PageProps) {
    const { register, handleSubmit, errors, control } = useFormData();

    const handleForm = (data: FormProps) => {
        router.post("/posts", data);
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Criar post" />
            <form
                onSubmit={handleSubmit(handleForm)}
                className="max-w-7xl px-8 mx-auto pt-10"
            >
                <Input
                    label="Slug"
                    type="text"
                    {...register("slug")}
                    placeholder="Slug"
                    error={errors?.slug?.message}
                />

                <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <QuillEditor
                            label="Descrição"
                            error={errors?.description?.message}
                            onChange={field.onChange}
                        />
                    )}
                />
                <Button type="submit">Criar Post</Button>
            </form>
        </AuthenticatedLayout>
    );
}
