import React, {useState} from 'react';
import coffee from "../../imgs/Main/coffee.svg";
import tableware from "../../imgs/Main/tableware.svg";
import glasses from "../../imgs/Main/glasses.svg";
import cl from './Places.module.css'
import MySelectedButton from "../UI/MySelectedButton/MySelectedButton.jsx";

const Places = () => {

    const [isRed, setIsRed] = useState(false);

    const buttonsDataFirst = [
        {
            text: 'Кафе и кофейни',
            image: coffee,
            props: {
                onClick: () => {
                    setIsRed((prevIsRed) => !prevIsRed);
                },
            },
        },
        {
            text: 'Рестораны',
            image: tableware,
            props: {
                onClick: () => {
                    setIsRed((prevIsRed) => !prevIsRed);
                },
            },
        },
        {
            text: 'Бары',
            image: glasses,
            props: {
                onClick: () => {
                    setIsRed((prevIsRed) => !prevIsRed);
                },
            },
        },
    ];


    return (
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
    );
};

export default Places;