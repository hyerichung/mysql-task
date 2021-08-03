import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

import AlbumInfo from "../components/AlbumInfo";
import MainHeader from "../components/shared/MainHeader";

const AlbumDetailPageWrpper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: yellow;

  ${({ theme }) => theme.laptop`
    width: 414px;
    height: 800px;
    min-height: 800px;
    box-shadow: 5px 5px 20px 20px rgb(0 0 0 / 10%);
  `}
`;

export default function AlbumDetailPage({
  album,
  tracks,
  onBackIconClick,
  onTrackClick
}) {
  return (
    <>
      <AlbumDetailPageWrpper>
        <MainHeader
          title="Album Details"
          backIcon={faChevronLeft}
          onBackIconClick={onBackIconClick}
        />
        <AlbumInfo
          album={album}
          tracks={tracks}
          onTrackClick={onTrackClick}
        />
      </AlbumDetailPageWrpper>
    </>
  );
}