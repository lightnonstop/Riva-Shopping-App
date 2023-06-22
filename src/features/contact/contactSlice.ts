import { SerializedError, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { contactDataProps, contactService } from "./contactService"
import { toast } from "react-toastify";
export const createQuery= createAsyncThunk('contact/post', async(contactData: contactDataProps, thunkAPI) => {
    try {
        return await contactService.postQuery(contactData);
    } catch (error){
        return thunkAPI.rejectWithValue(error)
    }
})
type initialStateProps = {
    contact: object
    error: boolean
    isSuccessfull: boolean
    isLoading: boolean
    message?: SerializedError
}
const initialState: initialStateProps = {
    contact: {},
    error: false,
    isSuccessfull: false,
    isLoading: false,
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createQuery.pending, state => {
                state.isLoading = true;
            })
            .addCase(createQuery.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = true;
                state.error = false;
                state.contact = action.payload;
                if (state.isSuccessfull){
                    toast.success('Contact form is submitted successfully!')
                }
            })
            .addCase(createQuery.rejected, (state, action) => {
                state.isLoading = false;
                state.isSuccessfull = false;
                state.error = true;
                state.message = action.error;
                if (state.error){
                    toast.success('Something went wrong!')
                }
            })
    }
})
export default contactSlice.reducer;