import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { getAllAlbums } from "../redux/slices/musicSlice";

export default function useAlbums() {
  const dispatch = useDispatch();
  const [albumList] = useState();

  useEffect(() => {
    dispatch(getAllAlbums());
  }, []);

  return {};
}