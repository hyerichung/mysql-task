import React from "react";
import styled from "styled-components";

import trimTitle from "../utils/trimTitle";

const AlbumBriefDescWrapper = styled.div`
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
  color: ${({ theme }) => theme.colors.grey};;
  padding-left: 0.5em;
`;

function AlbumBriefDesc({ album }) {
  return (
    <AlbumBriefDescWrapper>
      <AlbumTitleWrapper>
        <AlbumTitle>
          {trimTitle(album.title, 22)}
        </AlbumTitle>
      </AlbumTitleWrapper>
      <AlbumArtist>{album.artist}</AlbumArtist>
    </AlbumBriefDescWrapper>
  );
}

export default React.memo(AlbumBriefDesc);
