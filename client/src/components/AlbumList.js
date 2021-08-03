import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import Album from "./Album";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
  position: relative;
  margin-bottom: 1em;
  padding: 2em 1em;
  top: 60px;
  bottom: 60px;
  background-color: blue;
`;

const MainWrapper = styled.div`
  height: calc(100% - 60px);
  overflow: scroll;
  background-color: orange;
`;

function AlbumList({ albums, onAlbumClick }) {
  const history = useHistory();

  return (
    <MainWrapper>
      <Main>
        {
          albums.map(album =>
            <Album
              key={album.id}
              album={album}
              onAlbumClick={onAlbumClick}
            />
          )
        }
      </Main>
    </MainWrapper>
  );
}

export default AlbumList;
