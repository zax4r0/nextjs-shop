import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

interface ProductState {
    items: [];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState = {
    items: [],
    loading: 'idle',
} as ProductState;

export const productsFetch = createAsyncThunk('products/productsFetch', async () => {
    const responce = await axios.get('https://fakestoreapi.com/products');
    return responce?.data;
});

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productsFetch.pending, (state, action) => {
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
        });
        builder.addCase(productsFetch.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.items = action.payload;
        });
        builder.addCase(productsFetch.rejected, (state, action) => {
            state.loading = 'pending';
        });
    },
});

export default productsSlice.reducer;
