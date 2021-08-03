import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import useAudio from "../hooks/useAudio";
import AlbumDetailsPage from "../pages/AlbumDetailsPage";
import { setCurrentMusic, setIsPlaying } from "../redux/slices/currentMusicSlice";

export default function AlbumDetailContainer() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { albumId } = useParams();
  const { albums, tracks } = useSelector((state) => state.musicInfo);

  function handleBackIconClick() {
    history.goBack();
  }

  function handleTrackClick(trackId, artist, coverUrl) {
    console.log("track click", tracks.byTrackId[trackId], artist, coverUrl);

    dispatch(setCurrentMusic({ track: tracks.byTrackId[trackId], artist, coverUrl }));
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
