import Link from "next/link";
import Post from "../interfaces/Post";
import markdownStyles from './markdown-styles.module.css';

export default function PostPreview({post}: {post: Post}) {


    return (
        <div className="flex flex-row lg:-ms-32 mb-12 w-full">
            <div className="w-32 hidden lg:block">
                <div className="w-32 flex flex-col mask mask-squircle gap-0 text-slate-200  dark:text-slate-200 bg-slate-500 dark:bg-slate-800">
                    <div className="text-center">{ post.date.getDate() }</div>
                    <div className="text-center font-semibold">{ post.date.toLocaleString("en-US", { month: "long" }) }</div>
                    <div className="text-center">{ post.date.getFullYear() }</div>
                </div>
            </div>
            
            <div className="grow w-full max-h-80 flex flex-col lg:-mr-32">
                <div className='text-slate-600 dark:text-slate-400 lg:hidden'>
                    {post.author.name} | {post.date.toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric',}) }
                </div>
                <div className={`prose lg:prose-xl w-full text-ellipsis overflow-hidden dark:text-slate-300 max-w-none ${markdownStyles['markdown']}`}
                        dangerouslySetInnerHTML={{ __html: post.content }}>
                </div>
                <div className="flex justify-between pt-5">
                    <div className="flex flex-wrap gap-1">
                        { post.tags.map(t => <span key={t} className="badge badge-secondary badge-outline">{t}</span>)}
                    </div>

                    <Link href={`/${post.slug}`}
                            className="hover:underline">Read more →</Link>
                </div>
            </div>
        </div>
    )
}