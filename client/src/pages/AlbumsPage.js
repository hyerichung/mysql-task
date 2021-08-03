import { faBars } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import AlbumList from "../components/AlbumList";
import MainHeader from "../components/shared/MainHeader";
import { HEADER_TITLE } from "../constants";
import PageDefaultWrapper from "../layout/PageDefaultWrapper";

export default function AlbumsPage({
  onAlbumClick,
  onHeaderLeftIconClick,
  albums
}) {
  return (
    <>
      <PageDefaultWrapper>
        <MainHeader
          title={HEADER_TITLE.HOME}
          backIcon={faBars}
          onHeaderLeftIconClick={onHeaderLeftIconClick}
        />
        <AlbumList albums={albums} onAlbumClick={onAlbumClick} />
      </PageDefaultWrapper>
    </>
  );
};
