import { IFile } from './file';

export interface IAlbum {
    pk: number;
    title: string;
    files: IFile[]
}
