import { faMusic, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

import trimTitle from "../utils/trimTitle";

const PlayerWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  z-index: 1;

  ${({ theme }) => theme.laptop`
    width: 414px;
    bottom: calc((100% - 800px) / 2);
  `}

  background-color: ${({ theme }) => theme.colors.search};
  color: ${({ theme }) => theme.colors.white};
`;

const PlayerContents = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

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

const PlayControlButton = styled.div`
  width: 13%;
  height: 100%;
  font-size: 1.5em;
  right: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Abc = styled.div`
  height: 100%;
  width: 15%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Player({ title, artist, coverUrl, isPlaying, onControlButtonClick }) {
  return (
    <PlayerWrapper>
      <PlayerContents>
        { coverUrl ? <img src={coverUrl} alt="album_cover" height="100%" /> : <Abc><FontAwesomeIcon icon={faMusic} /></Abc>}
        <CurrentTrackInfo>
          <CurrentTrackTitleText>
            {title.length
              ? trimTitle(title, 26)
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
