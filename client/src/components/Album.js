import React from "react";
import styled from "styled-components";

const AlbumWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 180px;
  flex-grow: 0;
  min-height: 200px;
  background-color: green;
  cursor: pointer;
`;

const AlbumDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ceneter;
  width: 100%;
  min-height: 50px;
`;

const AlbumTitleWrapper = styled.div`
  display: flex;
  justify-content: ceneter;
  align-items: center;
  height: 25px;
  padding-left: 0.4em;
`;

const AlbumTitle = styled.div`
  font-size: 15px;
`;

const AlbumArtist = styled.div`
  font-size: 13px;
  color: grey;
  padding-left: 0.7em;
`;

function Album({ album, onAlbumClick }) {
  return (
    <AlbumWrapper onClick={() => onAlbumClick(album.id)}>
      <img
        src={album.cover_url}
        alt="album_cover"
        width="100%"
      />
      <AlbumDescWrapper>
        <AlbumTitleWrapper>
          <AlbumTitle>
            {album.title.length > 23 ? album.title.substr(0, 20) + "..." :album.title}
          </AlbumTitle>
        </AlbumTitleWrapper>
        <AlbumArtist>{album.artist}</AlbumArtist>
      </AlbumDescWrapper>
    </AlbumWrapper>
  );
}

export default Album;
