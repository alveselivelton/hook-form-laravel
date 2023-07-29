import DOMPurify from "dompurify";
import { Link } from "@inertiajs/react";

type PostProps = {
    post: {
        id: string;
        slug: string;
        description: string;
    };
};

export const Post = ({ post }: PostProps) => {
    let cleanHTML = DOMPurify.sanitize(post.description);
    return (
        <div className="pb-8">
            <div
                dangerouslySetInnerHTML={{ __html: cleanHTML }}
                className="mb-4"
            />
            <Link
                href={`/posts/${post.slug}`}
                className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
            >
                Ver Post
            </Link>
        </div>
    );
};
