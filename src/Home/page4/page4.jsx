import cl from "./page4.module.css";
import React, { useEffect, useState } from 'react';
import med_backBut from "./assets/icons/med_backBut.svg";
import PiterTwo from "./assets/img/PiterTwo.svg";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useFetch } from "../../components/hooks/useFetchB.js";

const Page4 = () => {
  const [data, setData] = useState({});
  const [cardsToShow, setCardsToShow] = useState(4);

  const [fetching, isDataLoading, dataError] = useFetch(async () => {
    const response = await axios.get(
        "https://places-test-api.danya.tech/api/getUser?uid=1295257412"
    );
    setData(response.data || {}); // Ensure setData receives an object
    return response;
  });

  useEffect(() => {
    fetching(); // Call the fetching function to initiate data fetching
  }, [fetching]); // Include fetching in the dependency array to avoid missing dependency warning

  const PHOTO = data.user?.photoBase64Url || '';
  const LIKED = data.user?.liked?.length || 0;
  const NAME = data.user?.name || '';
  const USERNAME = data.user?.username || '';

  const renderCards = data.user?.liked?.slice(0, cardsToShow) || [];

  const loadMoreCards = () => {
    setCardsToShow((prev) => prev + (data.user?.liked?.length || 0) - 4);
  };

  return (
      <>
        <main className={cl.profile}>
          <Link to={"/"}>
            <a href="#!" id={cl.back}>
              <img src={med_backBut} alt="" />
            </a>
          </Link>
          <div className={cl.user_images}>
            <div id={cl.circle_img}>
              <img src={PHOTO} alt="" id={cl.user_img} />
            </div>
            <p id={cl.tag_saved}>{LIKED} сохранений</p>
          </div>
          <div className={cl.user_date}>
            <h1 id={cl.user_name}>{NAME}</h1>
            <p id={cl.user_tag}>{USERNAME}</p>
          </div>
        </main>

        <section className={cl.saved}>
          <div className={cl.texxt_title}>
            <h2>СОХРАНЕНИЯ</h2>
            <span>({LIKED})</span>
          </div>
          <div className={cl.list_saved}>
            {renderCards.map((like, index) => (
                <div key={index} className={cl.block_saved}>
                  {like.images.map((image, imgIndex) => (
                      <img
                          key={imgIndex}
                          src={`https://places-test-api.danya.tech${image.url}`}
                          alt=""
                      />
                  ))}
                  <div className={cl.like_icon}></div>
                  <p>NT</p>
                  <h2>BB</h2>
                </div>
            ))}
          </div>
          {cardsToShow < (data.user?.liked?.length || 0) && (
              <button onClick={loadMoreCards} className={cl.but}>
                ПОКАЗАТЬ ВСЕ
              </button>
          )}
        </section>

        <section className={cl.invite}>
          <img src={PiterTwo} alt="" />
          <h2>Зови друзей!</h2>
          <p>
            На случай если очень хочется поделиться нашим приложением с друзьями:{" "}
            <br /> отправляй эту пригласительную ссылку 👇
          </p>
          <p id={cl.hrefTG}>t.me/spbneformal_app_bot</p>
          <button className={cl.but}>СКОПИРОВАТЬ ССЫЛКУ</button>
        </section>

        <section className={cl.homeBlock3}></section>

        <section className={cl.homeBlock4}></section>
      </>
  );
};

export default Page4;
