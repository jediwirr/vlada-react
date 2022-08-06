import { createSlice } from "@reduxjs/toolkit";
import { IAlbum } from "../../interfaces/album"
import { getAlbums } from "../actions";

export interface AlbumsState {
    albums: IAlbum[];
    loading: boolean;
    error: string | null;
}

const initialState = {
    albums: [],
    loading: false,
    error: null
} as unknown as AlbumsState;

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAlbums.pending, (state) => {
            state.error = null;
            state.loading = true;
        });

        builder.addCase(getAlbums.fulfilled, (state, action) => {
            state.error = null;
            state.loading = false;
            state.albums = action.payload;
        });
    }
});

export default albumsSlice.reducer;
