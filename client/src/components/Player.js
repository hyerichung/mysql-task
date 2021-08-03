import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const PlayerWrapper = styled.div`
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
  z-index: 1;
  background-color: pink;

  ${({ theme }) => theme.laptop`
    width: 414px;
    bottom: calc((100% - 800px) / 2);
  `}
`;

function Player() {

  return (
    <PlayerWrapper>
    </PlayerWrapper>
  );
}

export default Player;
