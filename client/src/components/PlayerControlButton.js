import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

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

function PlayerControlButton({ title, isPlaying, onControlButtonClick }) {
  return (
    <PlayControlButton onClickCapture={onControlButtonClick}>
      { title && <FontAwesomeIcon icon={isPlaying ? faPause : faPlay } /> }
    </PlayControlButton>
  );
}

export default PlayerControlButton;
