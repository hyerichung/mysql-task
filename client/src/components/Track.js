import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const TrackWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5em;
  background-color: skyblue;
`;

const TrackInfoWrapper = styled.div`
  width: 78%;
`;

const TrackInfoText = styled.div`
  padding: 0.2em 0.5em;
  font-size: ${props => props.size};
`;

const TrackPlayButton = styled.div`
  cursor: pointer;
`;

const AlbumImg = styled.img``;

function Track({ artist, track, coverUrl, onTrackClick }) {
  return (
    <TrackWrapper>
      <AlbumImg src={coverUrl} width="13%" />
      <TrackInfoWrapper>
        <TrackInfoText size="1em">{track.title}</TrackInfoText>
        <TrackInfoText size="0.7em">{artist}</TrackInfoText>
      </TrackInfoWrapper>
      <TrackPlayButton onClick={() => onTrackClick(track.id)}>
        <FontAwesomeIcon icon={faPlay} />
      </TrackPlayButton>
    </TrackWrapper>
  );
}

export default Track;
