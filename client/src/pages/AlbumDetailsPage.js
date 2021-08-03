import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import AlbumInfo from "../components/AlbumInfo";
import MainHeader from "../components/shared/MainHeader";
import PageDefaultWrapper from "../layout/PageDefaultWrapper";

export default function AlbumDetailPage({
  album,
  tracks,
  onBackIconClick,
  onTrackClick
}) {
  return (
    <>
      <PageDefaultWrapper>
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
      </PageDefaultWrapper>
    </>
  );
}