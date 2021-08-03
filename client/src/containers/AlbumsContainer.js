import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import AlbumsPage from "../pages/AlbumsPage";
import { getAllAlbums } from "../redux/slices/musicSlice";

export default function AlbumsContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { albums } = useSelector((state) => state.music);

  useEffect(() => {
    dispatch(getAllAlbums());
  }, []);

  function handleAlbumClick(albumId) {
    history.push(`/albums/${albumId}`);
  }

  return (
    <AlbumsPage
      onAlbumClick={handleAlbumClick}
      albums={albums}
    />
  );
}