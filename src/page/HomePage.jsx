import React, { useState } from "react";
import NavHome from "../components/navbar/NavHome";
import Footer from "../components/footer/Footer";
import axios from "axios";
import { loadingSvg } from "../svg/loading";

function FirstPage() {
    const [price, setPrice] = useState(2.07);
    const [priceTotal, setPriceTotal] = useState(2.07);
    const [search, setSearch] = useState("");
    const [name, setName] = useState("Please fill the search bar");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const getPrice = async (search) => {
        setLoading(true);
        try {
            const res = await axios.post(
                process.env.REACT_APP_API + "/contents/price",
                {
                    name: search ? search : "Dragonclaw Hook",
                }
            );
            setPrice(+res.data.lowest_price.slice(1));
            setPriceTotal(
                +res.data.lowest_price.slice(1) +
                    +res.data.lowest_price.slice(1) * 0.3
            );
            setName(res.data.market_hash_name);
            setSuccess(true);
            setLoading(false);
        } catch (error) {
            setSuccess(false);
            setLoading(false);
            setName("Item not found");
        }
    };

    const handleGetPrice = () => {
        getPrice(search);
    };

    return (
        <>
            <div className="relative h-full">
                {/* =================Section1==================== */}
                <div
                    id="HomePage"
                    className="flex-col flex gap-8 justify-between h-full"
                >
                    <NavHome />
                    <div className="flex flex-col justify-center items-center pb-[50%] pt-20 gap-12">
                        <div className="flex gap-2 flex-col">
                            <input
                                disabled={loading}
                                type="text"
                                className="border rounded-md px-2"
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter" && search) {
                                        handleGetPrice();
                                    }
                                }}
                            />
                            <button
                                className={`border rounded-md disabled:opacity-50 disabled:bg-slate-300 disabled:cursor-not-allowed p-2 bg-blue-500 active:bg-blue-700 duration-300 hover:text-white text-white`}
                                disabled={!search || loading}
                                onClick={() => {
                                    handleGetPrice();
                                }}
                                onKeyPress={(e) => {
                                    if (e.key === "Enter") {
                                        handleGetPrice();
                                    }
                                }}
                            >
                                Search
                            </button>
                        </div>
                        <div className="px-2 text-center">
                            {!loading ? (
                                <>
                                    {success ? (
                                        <div className="flex flex-col gap-2">
                                            <h2>{name}</h2>
                                            <p>Price: ฿{price}</p>
                                            <p>
                                                Price Total: ฿
                                                {priceTotal.toFixed(2)}
                                            </p>
                                        </div>
                                    ) : (
                                        <h4>{name}</h4>
                                    )}
                                </>
                            ) : (
                                loadingSvg
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FirstPage;
