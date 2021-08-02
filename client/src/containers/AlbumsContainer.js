import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import AlbumsPage from "../pages/AlbumsPage";

export default function AlbumsContainer() {
  const history = useHistory();

  function handleAlbumClick(albumId) {
    history.push(`/albums/${albumId}`);
  }

  return (
    <AlbumsPage
      onAlbumClick={handleAlbumClick}
    />
  );
}