    // SortedPosts.jsx
    import React, { useEffect, useState } from 'react';
    import { Link } from 'react-router-dom';
    import yellow_heart from './../Home/categoryPage/imgs/main/section__publications/icons/yellow_heart.svg';
    import heart from './../Home/page2/img/food/heart.svg';
    import { resetButton, setButtonPressed } from './../features/buttonSlide.js';
    import { useDispatch, useSelector } from 'react-redux';
    import useFetch from './hooks/useFetch.js';
    import cl from './../Home/page2/page2.module.css';
    import Loader from "./UI/Loader/Loader.jsx";

    const SortedPosts = ({ categoryId, categoryTitle }) => {
        const [localData, setLocalData] = useState([]);
        const dispatch = useDispatch();
        const { buttons } = useSelector(state => state.button);

        const { data, loading, error } = useFetch(
            `https://places-test-api.danya.tech/api/categories/${categoryId}?populate=posts,posts.images,posts.category,posts.subcategory,posts.subsubcategory`
        );


        // Use an object to store post titles
        const [postTitles, setPostTitles] = useState({});


        useEffect(() => {
            console.log("SortedPosts - categoryTitle:", categoryTitle);
            console.log("SortedPosts - categoryId:", categoryId);
        }, [categoryId]);

        useEffect(() => {
            if (!loading && !error && data) {
                console.log("SortedPosts - Data received:", data);
                // Assuming data structure is data.attributes.posts.data
                setLocalData(data.attributes.posts.data || []);
            }
        }, [data, loading, error, categoryId]);
        const handleButtonClick = (buttonId) => {
            if (buttons[buttonId]?.isPressed) {
                dispatch(resetButton({ buttonId }));
            } else {
                dispatch(setButtonPressed({ buttonId }));
            }
        };
        const handleCardClick = (categoryId) => {
            // Обработчик клика по карточке, например, перейти на страницу page3 с передачей categoryId
            // Для этого используйте Link из react-router-dom
        };
        return (
            <div className={`${cl.food__bottom} ${cl._container}`}>
                {loading ? (
                    <div className={cl.loaderContainer}>
                        <Loader />
                    </div>
                ) : (
                <div className={`${cl.food__row}`}>
                    {localData.map((post) => (
                        <div className={`${cl.food__column}`} key={post.id}>
                            <div>
                                <Link to={`/previewPage/${post.id}?categoryId=${categoryId}`}>
                                    <img className={cl.kaban} src={`https://places-test-api.danya.tech${post.attributes.images.data[0].attributes.url}`} alt="" />
                                </Link>
                            </div>

                            <button onClick={() => handleButtonClick(post.id)} className={`${cl.main_like}`}>
                                <img src={buttons[post.id]?.isPressed ? yellow_heart : heart} alt="" />
                            </button>
                            <div className="food__content">
                                <h2 className={`${cl.food__name}`}>{post.attributes.title}</h2>
                                <p className={`${cl.food__position}`}>{post.attributes.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                )}

            </div>
        );
    };

    export default SortedPosts;
