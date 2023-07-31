import Link from "next/link";

export default function Header() {


    return (
        <nav id="header" className="w-full z-10 top-0">

            <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

                <div className="flex gap-3">
                    <Link className="text-slate-900 no-underline hover:no-underline text-xl" href="/">
                        Novi<span className="font-extrabold">Blog</span>
                    </Link>
                    <Link className="text-slate-900 text-base hover:underline underline-offset-8" href="/about">
                        About
                    </Link>
                </div>

            </div>
        </nav>
    )
}