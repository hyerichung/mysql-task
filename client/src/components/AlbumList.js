import React from "react";
import styled from "styled-components";

import Album from "./Album";

const AlbumListMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainList = styled.main`
  height: calc(100vh - 16%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
  position: relative;
  padding: 2em 1em;
  top: 60px;
  bottom: 60px;
  overflow: scroll;
`;

function AlbumList({ albums, onAlbumClick }) {
  return (
    <AlbumListMainWrapper>
      <MainList>
        {
          albums.map(album =>
            <Album
              key={album.id}
              album={album}
              onAlbumClick={onAlbumClick}
            />
          )
        }
      </MainList>
    </AlbumListMainWrapper>
  );
}

export default AlbumList;
