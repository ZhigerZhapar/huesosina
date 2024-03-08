// store.js
import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from '../features/buttonSlide.js';
import rootReducer from '../actions.js'; // Update the path accordingly

export const store = configureStore({
    reducer: {
        button: buttonReducer,
        title: rootReducer, // Assuming 'title' is the key for your title reducer
    },
});


export default store;
