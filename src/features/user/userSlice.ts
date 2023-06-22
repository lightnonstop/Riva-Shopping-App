import { SerializedError, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { authService, cartDataProps, userDataProps } from "./userService"
import { toast } from "react-toastify"
export const registerUser = createAsyncThunk('auth/register', async(userData: userDataProps, thunkAPI) => {
    try {
        return await authService.register(userData)
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const loginUser = createAsyncThunk('auth/login', async(userData: userDataProps, thunkAPI) => {
    try {
        return await authService.login(userData)
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const getUserWishlist = createAsyncThunk('user/wishlist', async(_, thunkAPI) => {
    try {
        return await authService.getWishlist()
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const addProductToCart = createAsyncThunk('user/cart/add', async(cartData: cartDataProps, thunkAPI) => {
    try {
        return await authService.addToCart(cartData)
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const getUserCart = createAsyncThunk('user/cart/get', async(_, thunkAPI) => {
    try {
        return await authService.getCart()
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const removeItemFromCart = createAsyncThunk('user/cart/delete', async(id: string, thunkAPI) => {
    try {
        return await authService.removeCartItem(id)
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const updateCartItemQty = createAsyncThunk('user/cart/update-quantity', async(cartItemDetail: {id: string, itemQty: string}, thunkAPI) => {
    try {
        return await authService.updateQty(cartItemDetail)
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})
type initialStateProps = {
    user: object
    error: boolean
    isSuccessfull: boolean
    isLoading: boolean
    message?: SerializedError
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    wishlist?: {wishlist: any}
    addedProduct?: object
    productCart?: {
        color: { title: string }
        _id?: string;
        product: cartDataProps 
}[]
    removeCartItem?: object
    updatedCartItem?: object
}

const getCustomerFromLocalStorage = localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer') || '') : null;

const initialState: initialStateProps = {
    user: getCustomerFromLocalStorage,
    error: false,
    isSuccessfull: false,
    isLoading: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.user = action.payload;
                if (state.isSuccessfull){
                    toast.info('User was created successfully');
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = false;
                state.error = true;
                state.message = action.error;
                if (state.error){
                    toast.error(action.error.message);
                }
            })

            .addCase(loginUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.user = action.payload;
                if (state.isSuccessfull){
                    localStorage.setItem('token', action.payload.token)
                    toast.info('User logged in successfully');
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = false;
                state.error = true;
                state.message = action.error;
                if (state.error){
                    toast.error(action.error.message);
                }
            })

            .addCase(getUserWishlist.pending, state => {
                state.isLoading = true;
            })
            .addCase(getUserWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.wishlist = action.payload;
            })
            .addCase(getUserWishlist.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = false;
                state.error = true;
                state.message = action.error;
            })

            .addCase(addProductToCart.pending, state => {
                state.isLoading = true;
            })
            .addCase(addProductToCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.addedProduct = action.payload;
                if (state.isSuccessfull){
                    toast.success('Item added to cart')
                }
            })
            .addCase(addProductToCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = false;
                state.error = true;
                state.message = action.error;
            })

            .addCase(getUserCart.pending, state => {
                state.isLoading = true;
            })
            .addCase(getUserCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.productCart = action.payload;
            })
            .addCase(getUserCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = false;
                state.error = true;
                state.message = action.error;
            })

            .addCase(removeItemFromCart.pending, state => {
                state.isLoading = true;
            })
            .addCase(removeItemFromCart.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.removeCartItem = action.payload;
                if (state.isSuccessfull){
                    toast.success('Item removed from cart')
                }
            })
            .addCase(removeItemFromCart.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = false;
                state.error = true;
                state.message = action.error;
                if (state.error){
                    toast.success('Something went wrong')
                }
            })

            .addCase(updateCartItemQty.pending, state => {
                state.isLoading = true;
            })
            .addCase(updateCartItemQty.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.updatedCartItem = action.payload;
                if (state.isSuccessfull){
                    toast.success('Item quantity added successfully')
                }
            })
            .addCase(updateCartItemQty.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = false;
                state.error = true;
                state.message = action.error;
                if (state.error){
                    toast.success('Something went wrong')
                }
            })
    }
})
export default authSlice.reducer;