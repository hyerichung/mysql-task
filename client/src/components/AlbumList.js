import React from "react";
import styled from "styled-components";

import Album from "./Album";

const AlbumListMainWrapper = styled.div`
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
  margin-bottom: 1em;
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

export default React.memo(AlbumList);
