"use client"
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Header() {

    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <nav id="header" className="w-full z-10 top-0">

            <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-2">

                <div className="flex gap-3">
                    <Link className=" no-underline hover:no-underline text-xl " href="/">
                        Novi<span className="font-extrabold">Blog</span>
                    </Link>
                    <button className="text-base hover:underline underline-offset-8 " 
                        onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}>
                        {currentTheme == 'light' ? 'dark': 'light'}
                    </button>
                </div>

            </div>
        </nav>
    )
}