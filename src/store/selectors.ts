import { createSelector } from "@reduxjs/toolkit";
import { RootState } from ".";

const selectSelf = (state: RootState) => state.albums;
export const albumsSelector = createSelector(selectSelf, (state) => state.albums);
export const videoAlbumsSelector = createSelector(selectSelf, (state) => state.videoAlbums);
