import React from 'react';
import cl from "./MyBigButton.module.css"

const MyBigButton = ({children, ...props}) => {
    return (
        <button {...props} className={cl.myBtn}>
            {children}
        </button>
    );
};

export default MyBigButton;