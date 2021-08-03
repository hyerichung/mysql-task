import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 60px;
  padding: 0.3rem;
  position: absolute;
  z-index: 1;
  background-color: #5b36ac;
  color: #fff;
`;

const HeaderContents = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  position: relative;
`;

const HeaderTitle = styled.span`
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.1rem;
  font-weight: 700;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

function MainHeader({ title, backIcon, onBackIconClick }) {
  return (
    <Header>
      <HeaderContents>
        <FontAwesomeIcon size="2x" icon={backIcon} onClick={onBackIconClick} />
        <HeaderTitle>{title}</HeaderTitle>
      </HeaderContents>
    </Header>
  );
}

export default MainHeader;
