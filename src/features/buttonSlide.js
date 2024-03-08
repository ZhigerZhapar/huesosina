import { createSlice } from '@reduxjs/toolkit';

export const buttonSlice = createSlice({
    name: 'button',
    initialState: {
        buttons: {}, // Use an object to store button states
    },
    reducers: {
        setButtonPressed: (state, action) => {
            const { buttonId } = action.payload;
            state.buttons[buttonId] = { isPressed: true };
        },
        resetButton: (state, action) => {
            const { buttonId } = action.payload;
            state.buttons[buttonId] = { isPressed: false };
        },
    },
});

export const { setButtonPressed, resetButton } = buttonSlice.actions;

export default buttonSlice.reducer;