import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import useAllAlbums from "../hooks/useAllAlbums";
import AlbumsPage from "../pages/AlbumsPage";

export default function AlbumsContainer() {
  const history = useHistory();
  const { albums } = useSelector((state) => state.musicInfo);
  useAllAlbums();

  function handleAlbumClick(albumId) {
    history.push(`/albums/${albumId}`);
  }

  function handleHeaderLeftIconClick() {
    // for sidebar menu
  }

  return (
    <AlbumsPage
      onAlbumClick={handleAlbumClick}
      onHeaderLeftIconClick={handleHeaderLeftIconClick}
      albums={albums}
    />
  );
}