import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const TrackWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.colors.white};
`;

const TrackInfoWrapper = styled.div`
  width: 78%;
`;

const TrackTitleText = styled.div`
  width: 85%;
  padding: 0.1em 0.6em;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.white};
`;

const TrackArtistText = styled.div`
  font-size: 0.7em;
  padding: 0 1em;
  color: ${({ theme }) => theme.colors.grey};
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
        <TrackTitleText>{track.title}</TrackTitleText>
        <TrackArtistText>{artist}</TrackArtistText>
      </TrackInfoWrapper>
      <TrackPlayButton onClick={() => onTrackClick(track.id, artist, coverUrl)}>
        <FontAwesomeIcon icon={faPlay} />
      </TrackPlayButton>
    </TrackWrapper>
  );
}

export default Track;
