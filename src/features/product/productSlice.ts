import { SerializedError, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { productService } from "./productService"
export const getAllProducts= createAsyncThunk('products/get', async(_, thunkAPI) => {
    try {
        return await productService.getProducts();
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const addProductToWishlist = createAsyncThunk('product/add-to-wishlist', async(productId: { prodId: string }, thunkAPI) => {
    try {
        return await productService.addToWishList(productId);
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})
export interface productProps{
    brand: string
    _id: string
    title:string
    totalRating: string
    price: string
    description: string
    tag?: string;
}
type initialStateProps = {
    product: productProps[]
    error: boolean
    isSuccessfull: boolean
    isLoading: boolean
    message?: SerializedError
    productAddedToWishlist?: object
}
const initialState: initialStateProps = {
    product: [],
    error: false,
    isSuccessfull: false,
    isLoading: false,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.product = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.message = action.error;
            })

            .addCase(addProductToWishlist.pending, state => {
                state.isLoading = true;
            })
            .addCase(addProductToWishlist.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.productAddedToWishlist = action.payload;
            })
            .addCase(addProductToWishlist.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.message = action.error;
            })
    }
})
export default productSlice.reducer;