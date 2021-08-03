import React from "react";
import styled from "styled-components";

import changeDateFormat from "../utils/changeDateFormat";

const AlbumDescWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: pink;
`;

const AlbumDescTextWrapper = styled.ul`
  padding: 0;
  text-align: center;
  background-color: green;
`;

const AlbumDescText = styled.div`
  text-decoration: none;
  padding: 0;
  font-size: ${props => props.size};
  margin: 0.2em 0.5em 0.2em 1em;
`;

const AlbumImg = styled.img``;

function AlbumDesc({ album }) {
  return (
    <AlbumDescWrapper>
      <AlbumImg src={album.cover_url} width="50%" />
      <AlbumDescTextWrapper>
        <AlbumDescText size="1.2em">{album.title}</AlbumDescText>
        <AlbumDescText size="1em">{album.artist}</AlbumDescText>
        <AlbumDescText size="0.7em">released by: {album.released_by}</AlbumDescText>
        <AlbumDescText size="0.7em">release date {changeDateFormat(album.release_date)}</AlbumDescText>
      </AlbumDescTextWrapper>
    </AlbumDescWrapper>
  );
}

export default AlbumDesc;
