import React from "react";
import styled from "styled-components";

import Track from "../components/Track";

const TrackListWrapper = styled.div`
  width: 95vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
`;

function TrackList({ artist, tracks, coverUrl, onTrackClick }) {
  return (
    <TrackListWrapper>
      {tracks.map(track =>
        <Track
          key={track.id}
          artist={artist}
          track={track}
          coverUrl={coverUrl}
          onTrackClick={onTrackClick}
        />)
      }
    </TrackListWrapper>
  );
}

export default TrackList;
