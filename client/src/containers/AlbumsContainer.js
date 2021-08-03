import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import useAllAlbums from "../hooks/useAllAlbums";
import AlbumsPage from "../pages/AlbumsPage";

export default function AlbumsContainer() {
  const history = useHistory();
  const { albums } = useSelector((state) => state.musicInfo);
  useAllAlbums();

  const handleAlbumClick = useCallback((albumId) => {
    history.push(`/albums/${albumId}`);
  }, [history]);

  const handleHeaderLeftIconClick = useCallback(() => {
    // for sidebar menu
  }, []);

  return (
    <AlbumsPage
      onAlbumClick={handleAlbumClick}
      onHeaderLeftIconClick={handleHeaderLeftIconClick}
      albums={albums}
    />
  );
}