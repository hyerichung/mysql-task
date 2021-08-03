import React from "react";
import styled from "styled-components";

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
  padding: 0 1em;
  font-size: 0.7em;
  color: ${({ theme }) => theme.colors.grey};
`;


function TrackInfo({ title, artist }) {
  return (
    <TrackInfoWrapper>
      <TrackTitleText>{title}</TrackTitleText>
      <TrackArtistText>{artist}</TrackArtistText>
    </TrackInfoWrapper>
  );
}

export default React.memo(TrackInfo);
