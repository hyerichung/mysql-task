import React from "react";
import styled from "styled-components";

import AlbumDesc from "./AlbumBottomDesc";
import TrackList from "./TrackList";

const AlbumInfoMainWrapper = styled.div`
  height: calc(100vh - 10%);
  overflow: scroll;
`;

const AlbumInfoMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  position: relative;
  top: 60px;
  margin: 2em 1em;
`;

function AlbumInfo({ album, tracks, onTrackClick }) {
  return (
    <AlbumInfoMainWrapper>
      <AlbumInfoMain>
        <AlbumDesc album={album}/>
        <TrackList
          tracks={tracks}
          artist={album.artist}
          coverUrl={album.cover_url}
          onTrackClick={onTrackClick}
        />
      </AlbumInfoMain>
    </AlbumInfoMainWrapper>
  );
}

export default AlbumInfo;
