import React from "react";
import styled from "styled-components";

import PlayerImg from "../components/PlayerImg";
import PlayerControlButton from "./PlayerControlButton";
import PlayerTrackInfo from "./PlayerTrackInfo";

const PlayerWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.search};
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.laptop`
    width: 414px;
    bottom: calc((100% - 800px) / 2);
  `}
`;

const PlayerContents = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

function Player({ title, artist, coverUrl, isPlaying, onControlButtonClick }) {
  return (
    <PlayerWrapper>
      <PlayerContents>
        <PlayerImg coverUrl={coverUrl} />
        <PlayerTrackInfo title={title} artist={artist} />
        <PlayerControlButton
          title={title}
          isPlaying={isPlaying}
          onControlButtonClick={onControlButtonClick}
        />
      </PlayerContents>
    </PlayerWrapper>
  );
}

export default React.memo(Player);
