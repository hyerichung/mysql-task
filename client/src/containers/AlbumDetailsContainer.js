import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import AlbumDetailsPage from "../pages/AlbumDetailsPage";
import { getAllAlbums } from "../redux/slices/musicSlice";

export default function AlbumDetailContainer() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const { albums, tracks } = useSelector((state) => state.music);

  useEffect(() => {
    dispatch(getAllAlbums());
  }, []);

  function handleBackIconClick() {
    history.goBack();
  }

  function handleTrackClick(trackId) {
    console.log("track click", tracks.byTrackId[trackId]);
  }

  return (
    <AlbumDetailsPage
      album={albums[albumId-1]}
      tracks={tracks.byAlbumId[albumId]}
      onBackIconClick={handleBackIconClick}
      onTrackClick={handleTrackClick}
    />
  );
}
