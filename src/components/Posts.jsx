import React, {useEffect, useRef, useState} from 'react';
import cl from "../Home/categoryPage/categoryPage.module.css";
import heart from "../Home/categoryPage/imgs/main/section__publications/icons/heart.svg";
import useFetch from "./hooks/useFetch.js";
import Loader from "./UI/Loader/Loader.jsx";
import yellow_heart from "../Home/categoryPage/imgs/main/section__publications/icons/yellow_heart.svg"
import { useDispatch, useSelector } from 'react-redux';
import { setButtonPressed, resetButton } from '../features/buttonSlide.js';

const MyComponent = () => {

    const handleButtonClick = (buttonId) => {
        if (buttons[buttonId]?.isPressed) {
            dispatch(resetButton({ buttonId }));
        } else {
            dispatch(setButtonPressed({ buttonId }));
        }
    };
    const dispatch = useDispatch();
    const { buttons } = useSelector((state) => state.button);
    const pageSize = 7;
    const [page, setPage] = useState(1);
    const [allData, setAllData] = useState([]);
    const { data, loading, error } = useFetch(
        `https://places-test-api.danya.tech/api/posts?populate=*&pagination[pageSize]=${pageSize}&pagination[page]=${page}&sort[0]=createdAt:desc`
    );

    const lastPostRef = useRef(null);

    useEffect(() => {
        if (data && data.length > 0) {
            // Check for duplicates before concatenating
            const uniqueData = data.filter((newPost) => {
                return !allData.some((existingPost) => existingPost.id === newPost.id);
            });

            // Combine the new data with the previous posts
            setAllData((prevData) => [...prevData, ...uniqueData]);
        }
    }, [data]);
// Scroll to the last post when new data is loaded
    // Scroll to the last post when new data is loaded
    const handleLoadMore = () => {
        // Increment the page number to load the next set of posts
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        if (lastPostRef.current) {
            lastPostRef.current.scrollTo({ behavior: 'smooth', block: 'end' });
        }
    }, [allData]);

    return (
        <section className={cl.section__publications}>
            <div className={`${cl.section__publications__container} ${cl._container}`}>
                <h2 className={cl.section__publications__header}>
                    Последние публикации
                </h2>

                <div className={`${cl.section__publications__card__block} ${cl.card__block}`}>
                    {allData &&
                        allData.map((post, index) => (
                            <div
                                key={`${post.id}-${index}`}  // Assuming 'id' is unique for each post
                                ref={index === allData.length - 1 ? lastPostRef : null}
                                className={`${cl.card__block__item} ${cl.block__item} ${
                                    index % 5 === 4 ? cl.spanned : ''
                                }`}
                            >
                                <div className={cl.block__item__icons}>
                                    <button onClick={() => handleButtonClick(index)} className={cl.block__item__button}>
                                        <img src={buttons[index]?.isPressed ? yellow_heart : heart}
                                             className={cl.block__item__icon} alt=""/>
                                    </button>
                                </div>
                                {post.attributes.images && post.attributes.images.data.length > 0 && (
                                    <img
                                        className={cl.block__item__img}
                                        src={`https://places-test-api.danya.tech${post.attributes.images.data[0].attributes.url}`}
                                        alt=""
                                    />
                                )}
                                <div
                                    className={`${cl.block__item__text} ${index % 5 === 4 ? cl.block__item__text__spanned : ''}`}>
                                    <p className={`${cl.block__item__paragraph} ${index % 5 === 4 ? cl.block__item__text__spanned__paragraph : ''}`}>{post.attributes.content}</p>
                                    <h4 className={`${cl.block__item__header} ${index % 5 === 4 ? cl.block__item__text__spanned__header : ''}`}>{post.attributes.title}</h4>
                                </div>
                            </div>
                        ))}
                </div>
                <div className={cl.section__publications__button}>
                    {loading ? (
                        <Loader/>
                    ) : (
                        data && data.length > 0 && data.length % pageSize === 0 && (
                            <button className={cl.section__publications__btn} onClick={handleLoadMore}>
                                Загрузить еще
                            </button>
                        )
                    )}
                </div>


            </div>
        </section>
    );
};
export default MyComponent;
