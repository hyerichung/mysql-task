import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { getAllAlbums } from "../redux/slices/musicInfoSlice";

export default function useAlbums() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAlbums());
  }, []);

  return {};
}