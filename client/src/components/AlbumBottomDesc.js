import React from "react";
import styled from "styled-components";

import changeDateFormat from "../utils/changeDateFormat";

const AlbumBottomDescWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding-top: 1em;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};;
  color: ${({ theme }) => theme.colors.white};
`;

const AlbumDescTextWrapper = styled.ul`
  padding: 0;
  text-align: center;
`;

const AlbumDescText = styled.div`
  text-decoration: none;
  padding: 0;
  font-size: ${props => props.size};
  margin: 0.3em 0.2em;
`;

const AlbumImg = styled.img`
  width: 50%;
`;

function AlbumBottomDesc({ album }) {
  return (
    <AlbumBottomDescWrapper>
      <AlbumImg src={album.cover_url} />
      <AlbumDescTextWrapper>
        <AlbumDescText size="1.2em">{album.title}</AlbumDescText>
        <AlbumDescText size="1em">{album.artist}</AlbumDescText>
        <AlbumDescText size="0.6em">
          released by: {album.released_by}
        </AlbumDescText>
        <AlbumDescText size="0.6em">
          release date: {changeDateFormat(album.release_date)}
        </AlbumDescText>
      </AlbumDescTextWrapper>
    </AlbumBottomDescWrapper>
  );
}

export default React.memo(AlbumBottomDesc);
