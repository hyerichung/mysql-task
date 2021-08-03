import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const TrackWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.white};;
`;

const TrackInfoWrapper = styled.div`
  width: 78%;
`;

const TrackInfoText = styled.div`
  padding: 0.2em ${props => props.space};
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
        <TrackInfoText size="1em" space="0.6em">{track.title}</TrackInfoText>
        <TrackInfoText size="0.7em" space="1em">{artist}</TrackInfoText>
      </TrackInfoWrapper>
      <TrackPlayButton onClick={() => onTrackClick(track.id, artist, coverUrl)}>
        <FontAwesomeIcon icon={faPlay} />
      </TrackPlayButton>
    </TrackWrapper>
  );
}

export default Track;
