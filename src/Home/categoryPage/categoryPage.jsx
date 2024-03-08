// CategoryPage.jsx
import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import darya from '../../Home/categoryPage/imgs/header/darya.svg';
import loop from '../../Home/categoryPage/imgs/header/loop.svg';
import tool from '../../Home/categoryPage/imgs/header/tool.svg';
import saintPetersburg from '../../Home/categoryPage/imgs/main/section__places/saint-petersburg.png';
import coffee from '../../Home/categoryPage/imgs/main/section__places/icons/coffee.svg';
import circus from '../../Home/categoryPage/imgs/main/section__places/icons/circus.svg';
import woman from '../../Home/categoryPage/imgs/main/section__places/icons/woman.svg';
import castle from '../../Home/categoryPage/imgs/main/section__places/icons/castle.svg';
import tree from '../../Home/categoryPage/imgs/main/section__places/icons/tree.svg';
import loopp from '../../Home/categoryPage/imgs/main/section__places/icons/loop.svg';
import Input from '../../components/Input/Input';
import useFetch from '../../components/hooks/useFetch.js';
import Posts from '../../components/Posts.jsx';
import Slider from '../../components/Slider.jsx';
import Footer from '../../components/Footer.jsx';
import Loader from '../../components/UI/Loader/Loader.jsx';
import cl from './categoryPage.module.css';

const CategoryPage = () => {
  const [isInputOpen, setIsInputOpen] = useState(false);

  const { data, loading, error } = useFetch(
      'https://places-test-api.danya.tech/api/categories'
  );
  const handleLoopClick = () => {
    setIsInputOpen(true);
  };

  const [activeCategory, setActiveCategory] = useState(null);

  const { categoryId } = useParams();

  // Define a function to handle category click
  const handleCategoryClick = () => {
    // Remove active class from all tabs
    document.querySelectorAll(`.${cl.card__item}`).forEach((tab) => {
      tab.classList.remove(cl.active);
    });

    // Add active class to the clicked tab
    setActiveCategory(categoryId);
  };
  const categories = [
    { id: 1, name: 'Где поесть', image: coffee },
    { id: 2, name: 'Интересные места', image: circus },
    { id: 3, name: 'Развлечения', image: woman },
    { id: 4, name: 'Музеи и выставки', image: castle },
    { id: 5, name: 'Загородом', image: tree },
    { id: 6, name: 'Экскурсии', image: loopp },
  ];
  return (
      <>
        {loading ? (
            <div className={cl.loaderContainer}>
              <Loader />
            </div>
        ) : (
            <div className={cl.wrapper}>
              <header className={cl.header}>
                {!isInputOpen && (
                    <div className={`${cl.header__container} ${cl._container}`}>
                      <Link to={'/accountPage'}>
                        <div className={cl.header__block__1}>
                          <div className={cl.header__block__1__image__block}>
                            <img src={darya} alt="" />
                          </div>
                          <div className={cl.header__text}>
                            <div className={cl.header__block__1__name}>Дарья</div>
                            <div className={cl.header__block__1__saves}>5 сохранений</div>
                          </div>
                        </div>
                      </Link>

                      <div className={cl.header__block__2}>
                        <div className={cl.header__block__2__image__block}>
                          <img className={cl.header__block__2__img} src={tool} alt="" />
                          <Link to={'/searchPage'}>
                            <img
                                className={cl.header__block__2__img}
                                src={loop}
                                alt=""
                                onClick={handleLoopClick}
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                )}
                {isInputOpen && <Input />}
              </header>

              <main className={cl.main}>
                <section className={cl.section__places}>
                  <div className={`${cl.section__places__container} ${cl._container}`}>
                    <h2 className={cl.section__places__header}>КУДА ПОЙДЕМ?</h2>

                    <div className={`${cl.section__places__image__block} ${cl.image__block}`}>
                      <img className={cl.image__block__img} src={saintPetersburg} alt=""/>
                    </div>

                    <div className={`${cl.section__places__card__block} ${cl.card}`}>
                      {categories.map((category) => (
                          <Link
                              key={category.id}
                              to={`/page2/${category.id}`}
                              className={`${cl.card__item} ${activeCategory === category.id ? cl.active : ''}`}
                              onClick={() => handleCategoryClick(category.id)}
                          >
                            <div className={cl.card__item__img}>
                              <img src={category.image} alt=""/>
                            </div>
                            <p className={cl.card__item__paragraph}>{category.name}</p>
                          </Link>
                      ))}
                    </div>
                    <div className={cl.section__places__button}>
                      <button className={cl.section__places__btn}>
                        Искать места рядом с вами
                      </button>
                    </div>
                  </div>
                </section>
                <Slider/>
                <Posts/>
              </main>

              <Footer/>
            </div>
        )}
      </>
  );
};

export default CategoryPage;
