import { IImage } from "./image";

export interface IAlbum {
    pk: number;
    title: string;
    images: IImage[];
}
