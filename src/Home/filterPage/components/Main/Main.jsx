import React from 'react';
import cl from './Main.module.css'
import SelectBlock from "../SelectBlock/SelectBlock.jsx";

const Main = () => {
    return (
        <div className={`${cl._container} ${cl.main__container}`}>
            <SelectBlock />

        </div>
    );
};

export default Main;