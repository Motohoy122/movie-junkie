import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    step: 1,
    genre: '',
    selection2: '',
    selection3: '',
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        nextStep: (state) => {
            state.step = state.step + 1;
        },
        prevStep: (state) => {
            state.step = state.step - 1;
        },
        handleChange: (state, input) => e => {
            state[input] = e.target.value;
        }
    }

})

export const {nextStep, prevStep} = formSlice.actions;

// export const selectUserName = (state) => state.user.name;
// export const selectEmail = (state) => state.user.email;
// export const selectPhoto = (state) => state.user.photo;

export default formSlice.reducer;