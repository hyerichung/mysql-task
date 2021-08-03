import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import AlbumsPage from "../pages/AlbumsPage";
import { getAllAlbums } from "../redux/slices/musicInfoSlice";

export default function AlbumsContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { albums } = useSelector((state) => state.musicInfo);

  useEffect(() => {
    dispatch(getAllAlbums());
  }, []);

  function handleAlbumClick(albumId) {
    history.push(`/albums/${albumId}`);
  }

  function handleBackIconClick() {
    console.log("clicked");
  }

  return (
    <AlbumsPage
      onAlbumClick={handleAlbumClick}
      onBackIconClick={handleBackIconClick}
      albums={albums}
    />
  );
}