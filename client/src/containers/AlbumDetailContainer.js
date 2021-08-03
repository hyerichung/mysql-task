import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import AlbumDetailPage from "../pages/AlbumDetailPage";
import { getAllAlbums } from "../redux/slices/musicSlice";

export default function AlbumDetailContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { albums } = useSelector((state) => state.music);

  useEffect(() => {
    dispatch(getAllAlbums());
  }, []);

  function handleBackIconClick() {
    history.goBack();
  }

  return (
    <AlbumDetailPage
      albums={albums}
      onBackIconClick={handleBackIconClick}
    />
  );
}
