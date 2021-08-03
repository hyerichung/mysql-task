import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAllAlbums } from "../redux/slices/musicInfoSlice";

export default function useAlbums() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAlbums());
  }, [dispatch]);

  return {};
}