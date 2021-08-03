import React from "react";
import styled from "styled-components";

import AlbumBriefDesc from "./AlbumBriefDesc";

const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 170px;
  flex-grow: 0;
  min-height: 200px;
  cursor: pointer;
`;

const AlbumImg = styled.img`
  width: 100%;
`;

function Album({ album, onAlbumClick }) {
  return (
    <AlbumWrapper onClick={() => onAlbumClick(album.id)}>
      <AlbumImg
        src={album.cover_url}
      />
      <AlbumBriefDesc album={album} />
    </AlbumWrapper>
  );
}

export default Album;
