import { createAsyncThunk } from "@reduxjs/toolkit";
import albumsService from "../services/AlbumsService";

export const getAlbums = createAsyncThunk(
    'albums/getAlbums',
    async (_, thunkAPI) => {
       return await albumsService.fetchAlbums();
    }
);
