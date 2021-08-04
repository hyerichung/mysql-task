import React from "react";
import styled from "styled-components";

import { PLAYER_TRACK_INFO } from "../constants";

const CurrentTrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 65%;
  margin-left: 1em;
`;

const CurrentTrackTitleText = styled.div`
  width: 90%;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CurrentTrackArtistText = styled.div`
  width: 95%;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

function PlayerTrackInfo({ title, artist }) {
  return (
    <CurrentTrackInfo>
      <CurrentTrackTitleText>
        {title.length ? title : PLAYER_TRACK_INFO.TITLE}
      </CurrentTrackTitleText>
      <CurrentTrackArtistText>
        {artist.length ? artist : PLAYER_TRACK_INFO.COPYRIGHT}
      </CurrentTrackArtistText>
    </CurrentTrackInfo>
  );
}

export default PlayerTrackInfo;
