import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/user/userSlice';
import productReducer from '../features/product/productSlice';
import blogReducer from '../features/blog/blogSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    blog: blogReducer,
  },
});
console.log(store.getState());

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;