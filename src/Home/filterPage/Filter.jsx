import React, { useEffect, useState } from "react";
import cl from "./Filter.module.css";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import sun from "./imgs/Header/sun.svg"

const FilterPage = ({ handleFilterPageClose }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={cl._container}>
            <div className={cl.overlay}></div>
            <div className={cl.wrapper} onClick={(e) => e.stopPropagation()}>
                <Header handleFilterPageClose={handleFilterPageClose} />
                {loading ? (
                    <div className={cl.loadingSpinner}>
                        <img className={cl.loader} src={sun} alt="Loading" />
                    </div>
                ) : (
                    <Main />
                )}
            </div>
        </div>
    );
};

export default FilterPage;