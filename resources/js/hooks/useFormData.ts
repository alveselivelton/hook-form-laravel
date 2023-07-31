import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePage } from "@inertiajs/react";
import { useEffect } from "react";

const schema = z.object({
    slug: z.string().nonempty("O campo é obrigatório."),
    description: z
        .string()
        .nonempty("O campo é obrigatório.")
        .min(20, "Digite pelo menos 20 caracteres."),
});

export type FormProps = z.infer<typeof schema>;

export const useFormData = () => {
    const backendErrors = usePage().props.errors;

    useEffect(() => {
        if (backendErrors) {
            Object.entries(backendErrors).forEach(([field, error]) => {
                setError(field as keyof FormProps, { message: error });
            });
        }
    }, [backendErrors]);

    const {
        register,
        handleSubmit,
        setError,
        control,
        formState: { errors },
    } = useForm<FormProps>({
        resolver: zodResolver(schema),
    });

    return {
        register,
        handleSubmit,
        errors,
        control,
    };
};
