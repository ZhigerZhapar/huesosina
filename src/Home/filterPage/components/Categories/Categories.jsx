import React, {useState} from 'react';
import cl from "../SelectBlock/SelectBlock.module.css";
import MySelectedButton from "../UI/MySelectedButton/MySelectedButton.jsx";
import shrimp from "../../imgs/Main/shrimp.svg";
import circus from "../../imgs/Main/circus.svg";
import woman from "../../imgs/Main/woman.svg";
import castle from "../../imgs/Main/castle.svg";
import tree from "../../imgs/Main/tree.svg";
import loop from "../../imgs/Main/loop.svg";

const Categories = () => {
    const [isRed, setIsRed] = useState(false);

    const buttonsDataFirst = [
        {
            text: 'Еда',
            image: shrimp,
            props: {
                onClick: () => {
                    setIsRed((prevIsRed) => !prevIsRed);
                },
            },
        },
        {
            text: 'Интересные места',
            image: circus,
            props: {
                onClick: () => {
                    setIsRed((prevIsRed) => !prevIsRed);
                },
            },
        },
        {
            text: 'Развлечения',
            image: woman,
            props: {
                onClick: () => {
                    setIsRed((prevIsRed) => !prevIsRed);
                },
            },
        },
        {
            text: 'Музеи и выставки',
            image: castle,
            props: {
                onClick: () => {
                    setIsRed((prevIsRed) => !prevIsRed);
                },
            },
        },
        {
            text: 'Загородом',
            image: tree,
            props: {
                onClick: () => {
                    setIsRed((prevIsRed) => !prevIsRed);
                },
            },
        },
        {
            text: 'Экскурсии',
            image: loop,
            props: {
                onClick: () => {
                    setIsRed((prevIsRed) => !prevIsRed);
                },
            },
        },
    ];

    return (
        <div>
            <div className={cl.button__select}>
                <div className={cl.button__select__row}>
                    {buttonsDataFirst.map((button, index) => (
                        <MySelectedButton isRed={isRed} props={button.props} key={index + 1}>
                            <img className={cl.button__image} src={button.image} alt={`Изображение ${index}`}/>
                            {button.text}
                        </MySelectedButton>
                    ))

                    }
                </div>
            </div>
        </div>
    );
};

export default Categories;