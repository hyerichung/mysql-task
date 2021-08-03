import React from "react";
import styled from "styled-components";

import TrackInfo from "./TrackInfo";
import TrackPlayButton from "./TrackPlayButton";

const TrackWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.white};
`;

const TrackImg = styled.img`
  width: 13%;
`;

function Track({ artist, track, coverUrl, onTrackClick }) {
  return (
    <TrackWrapper>
      <TrackImg src={coverUrl} />
      <TrackInfo title={track.title} artist={artist} />
      <TrackPlayButton
        trackId={track.id}
        artist={artist}
        coverUrl={coverUrl}
        onTrackClick={onTrackClick}
      />
    </TrackWrapper>
  );
}

export default Track;
