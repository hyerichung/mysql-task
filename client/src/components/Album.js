import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const AlbumWrapper = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 170px;
  flex-grow: 0;
  background-color: green;
`;

const AlbumDescWrapper = styled.div`

`;

const AlbumTitle = styled.div`

`;

const AlbumArtist = styled.div`

`;

function Album({ album }) {
  return (
    <AlbumWrapper>
      <img
        src={album.cover_url}
        alt="album_cover"
        width="50%"
        height="60px" />
      <AlbumDescWrapper>
        <AlbumTitle>{album.title}</AlbumTitle>
        <AlbumArtist>{album.artist}</AlbumArtist>
      </AlbumDescWrapper>
    </AlbumWrapper>
  );
}

export default Album;
