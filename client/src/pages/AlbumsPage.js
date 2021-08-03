import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styled from "styled-components";

import AlbumList from "../components/AlbumList";
import MainHeader from "../components/shared/MainHeader";

const AlbumPageWrpper = styled.div`
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

export default function AlbumsPage({
  onAlbumClick,
  onBackIconClick,
  albums
}) {
  return (
    <>
      <AlbumPageWrpper>
        <MainHeader title="Home" backIcon={faBars} onBackIconClick={onBackIconClick} />
        <AlbumList albums={albums} onAlbumClick={onAlbumClick} />
      </AlbumPageWrpper>
    </>
  );
}