// actions.js
export const setCategoryTitle = (categoryId, categoryTitle) => ({
    type: 'SET_CATEGORY_TITLE',
    payload: { categoryId, categoryTitle },
});

const initialState = {
    categories: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CATEGORY_TITLE':
            return {
                ...state,
                categories: {
                    ...state.categories,
                    [action.payload.categoryId]: action.payload.categoryTitle,
                },
            };
        default:
            return state;
    }
};

export default rootReducer;
