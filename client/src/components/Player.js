import { faPause,faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

import trimPlayerTrackTitle from "../utils/trimPlayerTrackTitle";

const PlayerWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  z-index: 1;
  background-color: green;

  ${({ theme }) => theme.laptop`
    width: 414px;
    bottom: calc((100% - 800px) / 2);
  `}
`;

const PlayerContents = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: yellow;
`;

const CurrentTrackInfo = styled.div`
  background-color: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 65%;
  margin-left: 1em;
`;

const CurrentTrackTitleText = styled.div`
  background-color: pink;
  width: 100%;
  margin-bottom: 0.3em;
  font-size: 17px;
`;

const CurrentTrackArtistText = styled.div`
   background-color: green;
   width: 100%;
   font-size: 15px;
`;

const PlayControlButton = styled.div`
  background-color: palegoldenrod;
  width: 13%;
  height: 100%;
  font-size: 1.5em;
  right: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Abc = styled.div`
  height: 100%;
  width: 15%;
  background-color: green;
`;

function Player({ title, artist, coverUrl, isPlaying, onControlButtonClick }) {
  return (
    <PlayerWrapper>
      <PlayerContents>
        { coverUrl ? <img src={coverUrl} alt="album_cover" height="100%" /> : <Abc /> }
        <CurrentTrackInfo>
          <CurrentTrackTitleText>
            {title.length
              ? trimPlayerTrackTitle(title)
              : "Welcome, Choose track..."
            }
          </CurrentTrackTitleText>
          <CurrentTrackArtistText>
            {artist
              ? artist
              : "@hyerichung"
            }
          </CurrentTrackArtistText>
        </CurrentTrackInfo>
        <PlayControlButton onClick={onControlButtonClick}>
          { title && <FontAwesomeIcon icon={isPlaying ? faPause : faPlay } /> }
        </PlayControlButton>
      </PlayerContents>
    </PlayerWrapper>
  );
}

export default Player;
