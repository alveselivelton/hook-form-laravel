import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

import DOMPurify from "dompurify";
import { PostProps } from "@/types/postProps";
import RedirectButton from "@/Components/RedirectButton";

export default function Show({ auth, post }: PageProps & { post: PostProps }) {
    const cleanHTML = DOMPurify.sanitize(post.description);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title={post.slug} />
            <div className="mt-8 px-4 max-w-7xl mx-auto">
                <div
                    dangerouslySetInnerHTML={{ __html: cleanHTML }}
                    className="mb-4"
                />
                <div className="flex gap-4 flex-wrap">
                    <RedirectButton path="/posts">Voltar</RedirectButton>
                    <RedirectButton path={`/posts/${post.slug}/edit`}>
                        Editar Post
                    </RedirectButton>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
