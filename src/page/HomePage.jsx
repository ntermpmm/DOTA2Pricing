import React, { useState } from "react";
import NavHome from "../components/navbar/NavHome";
import Footer from "../components/footer/Footer";
import axios from "axios";

function FirstPage() {
    const [price, setPrice] = useState(2.07);
    const [priceTotal, setPriceTotal] = useState(2.07);
    const [search, setSearch] = useState("");
    const [name, setName] = useState("");
    const [success, setSuccess] = useState(false);

    const getPrice = async (search) => {
        try {
            const res = await axios.post(
                "http://127.0.0.1:8006/contents/price",
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
            console.log(res);
        } catch (error) {
            setSuccess(false);
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
                        <div className="flex gap-2">
                            <input
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
                                className={`border rounded-md px-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                                disabled={!search}
                                onClick={(e) => {
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
                        {success ? (
                            <>
                                <h1>{name}</h1>
                                <div>Price: ${price}</div>
                                <div>Price Total: ${priceTotal.toFixed(2)}</div>
                            </>
                        ) : (
                            <h1>Not found...</h1>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default FirstPage;
