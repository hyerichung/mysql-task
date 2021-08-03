import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Player from "../components/Player";
import AlbumsPage from "../pages/AlbumsPage";
import { getAllAlbums } from "../redux/slices/musicSlice";

export default function PlayerContainer() {

  return (
    <Player
    />
  );
}