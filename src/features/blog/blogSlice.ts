import { SerializedError, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { blogService } from "./blogService"
export const getAllBlogs= createAsyncThunk('blogs/get', async(_, thunkAPI) => {
    try {
        return await blogService.getBlogs();
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})
export const getABlog= createAsyncThunk('blog/get', async(id: string, thunkAPI) => {
    try {
        return await blogService.getBlog(id);
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})

type initialStateProps = {
    blogs: {
        _id: string; title: string
        description: string
        images: { url: string }[]
        id: string
        createdAt: string  
    }[]
    error: boolean
    isSuccessfull: boolean
    isLoading: boolean
    blog?: { title: string
        description: string
        images: { url: string }[]
        id: string
        createdAt: string  
    },
    message?: SerializedError
}
const initialState: initialStateProps = {
    blogs: [],
    error: false,
    isSuccessfull: false,
    isLoading: false,
}

export const productSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllBlogs.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllBlogs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.blogs = action.payload;
            })
            .addCase(getAllBlogs.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = false;
                state.error = true;
                state.message = action.error;
            })
            .addCase(getABlog.pending, state => {
                state.isLoading = true;
            })
            .addCase(getABlog.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.blog = action.payload;
            })
            .addCase(getABlog.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = false;
                state.error = true;
                state.message = action.error;
            })
    }
})
export default productSlice.reducer;