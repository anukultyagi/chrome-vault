"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="container max-w-6xl mx-auto p-4 flex items-center justify-between">
            <div>
                <Link href="/" className="text-xl font-medium text-zinc-950 hover:text-primary whitespace-nowrap">
                    Chrome Vault
                </Link>
            </div>
            <div className="flex items-center">
                <button onClick={toggleMenu} className="md:hidden text-zinc-900 hover:text-primary focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
                <ul className={`md:flex gap-2 md:gap-5 ${isOpen ? "flex flex-col md:flex-row mt-4 md:mt-0" : "hidden"}`}>
                    <li className="text-zinc-900 hover:text-primary">
                        <Link href="/instructions" className={`flex items-center ${pathname === "/instructions" ? "text-white hover:text-zinc-950" : ""}`}>
                            Instructions
                        </Link>
                    </li>
                    <li className="text-zinc-900 hover:text-primary">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">GitHub</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
