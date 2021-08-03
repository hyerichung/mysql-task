import React from "react";
import styled from "styled-components";

import { PLAYER_TRACK_INFO } from "../constants";
import trimTitle from "../utils/trimTitle";

const CurrentTrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 65%;
  margin-left: 1em;
`;

const CurrentTrackTitleText = styled.div`
  width: 100%;
  font-size: 15px;
`;

const CurrentTrackArtistText = styled.div`
   width: 100%;
   font-size: 12px;
`;

function PlayerTrackInfo({ title, artist }) {
  return (
    <CurrentTrackInfo>
      <CurrentTrackTitleText>
        {title.length
          ? trimTitle(title, 26)
          : PLAYER_TRACK_INFO.TITLE
        }
      </CurrentTrackTitleText>
      <CurrentTrackArtistText>
        {artist
          ? artist
          : PLAYER_TRACK_INFO.COPYRIGHT
        }
      </CurrentTrackArtistText>
    </CurrentTrackInfo>
  );
}

export default React.memo(PlayerTrackInfo);
