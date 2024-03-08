import { useState } from "react";
import cl from "./input.module.css";
import loop from "../../Home/categoryPage/imgs/header/loop.svg";
import arrowLeft from "../../Home/page3/img/arrow-left.svg";
import home from "./img/icons.svg";
import { Link } from "react-router-dom";

const Input = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleInputClick = () => {
    setIsFullscreen(true);
  };

  return (
    <div className={cl.container}>
      <div className={cl.block}>
        <Link to="/" className={cl.back}>
          <img src={arrowLeft} alt="" />
        </Link>
        <Link to="/" className={cl.home}>
          <img src={home} alt="" />
        </Link>
      </div>
      <div className={cl.fullscreen_input_container}>
        <h1 className={cl.screen_title}>Поиск</h1>
        <div className={cl.img_container}>
          <img src={loop} alt="" className={cl.loop_img} />
          <input
            type="text"
            placeholder="Поиск мест и событий"
            className={cl.fullscreen_input}
            onClick={handleInputClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
