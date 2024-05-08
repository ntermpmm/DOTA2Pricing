import React from "react";

function NavHome() {
    return (
        <nav className="w-full px-4 bg-transparent flex  items-center justify-between max-w-screen-xl mx-auto mt-12 border-b-2 pb-4">
            <a href="#Contact" className="font-bold text-lg">
                Thawin’K
            </a>
            <div className="md:flex items-center gap-8 text-[#757575] hidden ">
                <a
                    href="https://github.com/ntermpmm/"
                    className=" bg-[#6A5AE0] text-[#FFFFFF] text-[18px] font-semibold rounded-xl p-3"
                >
                    My Github!
                </a>
            </div>
            <a
                href="https://github.com/ntermpmm/"
                className=" md:hidden bg-[#6A5AE0] text-[#FFFFFF] text-[18px] font-semibold rounded-xl p-3"
            >
                My Github!
            </a>
        </nav>
    );
}

export default NavHome;
