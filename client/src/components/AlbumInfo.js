import React from "react";
import styled from "styled-components";

import AlbumDesc from "./AlbumBottomDesc";
import TrackList from "./TrackList";

const AlbumInfoMainWrapper = styled.div`
  height: calc(100% - 60px);
  overflow: scroll;
`;

const AlbumInfoMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1em;
  position: relative;
  margin-bottom: 1em;
  padding: 2em 0.8em;
  top: 60px;
  bottom: 60px;
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
