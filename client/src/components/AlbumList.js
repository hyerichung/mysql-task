import React from "react";
import styled from "styled-components";

import Album from "./Album";

const AlbumListMainWrapper = styled.div`
  top: 60px;
  height: calc(100% - 60px);
  overflow: scroll;
`;

const MainList = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
  position: relative;
  padding: 2em 1em;
  top: 60px;
  bottom: 60px;
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
