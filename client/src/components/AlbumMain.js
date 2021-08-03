import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Album from "../components/Album";

const MainWrapper = styled.main`
  background-color: blue;
  /* max-width: 100vw; */
  /* height: calc(100% - 120px); */
  /* height: calc(100% - 60px); */
  /* padding: 1rem .3rem; */
  /* padding: 2rem; */
  display: flex;
  position: relative;
  padding: 2em 1em 2em 1em;
  margin-bottom: 1em;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* position: absolute; */
  top: 60px;
  bottom: 60px;
  overflow: scroll;
  gap: 1em;
`;

function AlbumMain({ isHome, albums }) {
  const history = useHistory();


  return (
    <MainWrapper>
      {
        albums.map(album => <Album key={album.id} album={album} />)
      }

    </MainWrapper>
  );
}

export default AlbumMain;
