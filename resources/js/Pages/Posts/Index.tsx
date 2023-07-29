import { Post } from "@/Components/Post";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { PostProps } from "@/types/postProps";
import { Head } from "@inertiajs/react";

export default function Index({
    auth,
    posts,
}: PageProps & { posts: PostProps[] }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Posts" />
            <div className="mt-8 px-4 max-w-7xl mx-auto">
                <h1 className="text-gray-900 text-center font-bold text-2xl">
                    Veja os os nossos posts mais recentes
                </h1>
                <div className="mt-6">
                    {posts?.map((post) => (
                        <Post post={post} key={post.id} />
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
