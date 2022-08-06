import React, { useEffect } from 'react';
import Home from '../screens/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Noise from '../screens/Noise';
import About from '../screens/About';
import Texts from '../screens/TextsScreen';
import AlbumView from '../screens/AlbumView';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums } from '../store/actions';
import { AppDispatch } from '../store';
import { albumsSelector } from '../store/selectors';
import { IAlbum } from '../interfaces/album';

const AppRouter = () => {
    const dispatch: AppDispatch = useDispatch();
    const albums: IAlbum[] = useSelector(albumsSelector);

    useEffect(() => {
        dispatch(getAlbums());
    }, []);


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            {albums?.map(item => (
                <Route 
                    key={item.pk} 
                    path={`/albums/${item.pk}`} 
                    element={
                        <AlbumView album={item} />
                    } 
                />
            ))}
            <Route path="/noise" element={<Noise />} />
            <Route path="/about" element={<About />} />
            <Route path="/texts" element={<Texts />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
