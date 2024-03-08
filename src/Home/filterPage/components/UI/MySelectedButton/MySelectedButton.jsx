import React, {useState} from 'react';
import cl from './MySelectedButton.module.css'

const MySelectedButton = ({children , ...props}) => {
    const [isRed, setIsRed] = useState(false);

    const buttonStyle = {
        background: isRed ? '#FB527B' : 'white',
        color: isRed ? 'white' : 'black',
    };

    const handleClick = () => {
        setIsRed((prevIsRed) => !prevIsRed);
    };


    return (
        <div className={cl.button__block}>
            <button {...props} style={buttonStyle} className={cl.myBtn} onClick={handleClick}>
                {children}
            </button>
        </div>
    );
};

export default MySelectedButton;


// {buttonsData.map((button, index) => (
//                 <button key={index} className={cl.myBtn} {...button.props}>
//                     {button.image && <img src={button.image} alt={`Изображение ${index}`} />}
//                     {button.text}
//                 </button>
//             ))}