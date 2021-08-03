import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const TrackPlayButtonWrapper = styled.div`
  cursor: pointer;
`;

function TrackPlayButton({ trackId, artist, coverUrl, onTrackClick }) {
  return (
    <TrackPlayButtonWrapper onClick={() => onTrackClick(trackId, artist, coverUrl)}>
      <FontAwesomeIcon icon={faPlay} />
    </TrackPlayButtonWrapper>
  );
}

export default React.memo(TrackPlayButton);
