import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import AlbumInfo from "../components/AlbumInfo";
import MainHeader from "../components/shared/MainHeader";
import { HEADER_TITLE } from "../constants";
import PageDefaultWrapper from "../layout/PageDefaultWrapper";

export default function AlbumDetailPage({
  album,
  tracks,
  onHeaderLeftIconClick,
  onTrackClick
}) {
  return (
    <>
      <PageDefaultWrapper>
        <MainHeader
          title={HEADER_TITLE.ALBUM_DETAILS}
          backIcon={faChevronLeft}
          onHeaderLeftIconClick={onHeaderLeftIconClick}
        />
        <AlbumInfo
          album={album}
          tracks={tracks}
          onTrackClick={onTrackClick}
        />
      </PageDefaultWrapper>
    </>
  );
};
