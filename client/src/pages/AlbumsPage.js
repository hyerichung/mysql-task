import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import AlbumList from "../components/AlbumList";
import MainHeader from "../components/shared/MainHeader";
import PageDefaultWrapper from "../layout/PageDefaultWrapper";

export default function AlbumsPage({
  onAlbumClick,
  onBackIconClick,
  albums
}) {
  return (
    <>
      <PageDefaultWrapper>
        <MainHeader
          title="Home"
          backIcon={faBars}
          onBackIconClick={onBackIconClick}
        />
        <AlbumList albums={albums} onAlbumClick={onAlbumClick} />
      </PageDefaultWrapper>
    </>
  );
}