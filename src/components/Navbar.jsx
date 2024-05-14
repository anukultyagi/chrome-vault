"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="container max-w-6xl mx-auto p-4 flex items-center justify-between ">
            <div className="">
                <Link
                    className={`text-xl font-medium text-zinc-950 hover:text-primary whitespace-nowrap  `}
                    previewlistener="true"
                    href="/"
                >
                    Chrome Vault
                </Link>
            </div>
            <ul className="flex gap-2 md:gap-5">
                <li className="text-zinc-900 hover:text-primary">
                    <Link
                        className={`flex items-center ${pathname === "/instructions"
                            ? "text-white hover:text-zinc-950"
                            : ""
                            }`}
                        previewlistener="true"
                        href="/instructions"
                    >
                        instructions
                    </Link>
                </li>
                <li className="text-zinc-900 hover:text-primary">
                    <a
                        className="flex items-center pl-1"
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
