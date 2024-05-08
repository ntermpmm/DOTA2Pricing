import React from "react";

function Footer({ padding }) {
    return (
        <div className={`footer bg-black w-full h-full ${padding}`}>
            <div className="flex items-center flex-col gap-8 max-w-screen-lg mx-auto pt-16 pb-12">
                <div className="flex sm:flex-row flex-col items-center gap-12 justify-center text-white">
                    <a href="https://github.com/ntermpmm" alt="">
                        <div>My Github</div>
                    </a>
                    <div>thawin.kuwa@gmail.com</div>
                    <div>(+66) 95 2946 993</div>
                </div>
                <div className="text-white justify-center opacity-70">
                    © 2022 designed and developed by me
                </div>
            </div>
        </div>
    );
}

export default Footer;
