import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import formReducer from '../features/form/formSlice';


export default configureStore({
    reducer: {
        user: userReducer,
        form: formReducer,

    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});