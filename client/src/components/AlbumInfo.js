import React from "react";
import styled from "styled-components";

import AlbumDesc from "./AlbumDesc";
import TrackList from "./TrackList";

const Main = styled.main`
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
  background-color: blue;
`;

const MainWrapper = styled.div`
  height: calc(100% - 60px);
  overflow: scroll;
  background-color: orange;
`;

function AlbumInfo({ album, tracks, onTrackClick }) {
  return (
    <MainWrapper>
      <Main>
        <AlbumDesc album={album}/>
        <TrackList
          tracks={tracks}
          artist={album.artist}
          coverUrl={album.cover_url}
          onTrackClick={onTrackClick}
        />
      </Main>
    </MainWrapper>
  );
}

export default AlbumInfo;
