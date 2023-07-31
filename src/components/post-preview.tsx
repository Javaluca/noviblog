import Link from "next/link";
import Post from "../interfaces/Post";
import markdownStyles from './markdown-styles.module.css';

export default function PostPreview({post}: {post: Post}) {


    return (
        <div className="flex flex-row -ms-32 mb-12">
            <div className="flex-none w-32">
                <div className="flex flex-col bg-slate-500 mask mask-squircle text-gray-200 gap-0 ">
                    <div className="text-center">{ post.date.getDate() }</div>
                    <div className="text-center font-semibold">{ post.date.toLocaleString("en-US", { month: "long" }) }</div>
                    <div className="text-center">{ post.date.getFullYear() }</div>
                </div>
            </div>
            <div className="flex-grow-1 max-h-80 flex flex-col gap-20">
                <div className={`prose lg:prose-xl max-w-none  text-ellipsis overflow-hidden ${markdownStyles['markdown']}`}
                        dangerouslySetInnerHTML={{ __html: post.content }}>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-wrap gap-1">
                        { post.tags.map(t => <span key={t} className="badge badge-secondary badge-outline">{t}</span>)}
                    </div>

                    <Link as={`${post.slug}`}
                            href="[post.slug]"
                            className="hover:underline">Read more →</Link>
                </div>
            </div>
        </div>
    )
}