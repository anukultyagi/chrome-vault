import React from "react";

const Navbar = () => {
    return (
        <nav className="container max-w-6xl mx-auto p-3 flex items-center justify-between ">
            <div className="">
                <a
                    className="text-xl font-medium text-zinc-950 hover:text-primary whitespace-nowrap"
                    previewlistener="true"
                    href="/"
                >
                    Chrome Vault
                </a>
            </div>
            <ul className="flex gap-2 md:gap-5">
                <li className="text-zinc-900 hover:text-primary">
                    <a
                        className="flex items-center  "
                        previewlistener="true"
                        href="/about"
                    >
                        instructions
                    </a>
                </li>
                <li className="text-zinc-900 hover:text-primary">
                    <a
                        className="flex items-center pl-1"
                        previewlistener="true"
                        href="/contact"
                    >
                        github
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
