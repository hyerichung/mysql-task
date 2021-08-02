import { faBars,faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";
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

function MainHeader({ isHome }) {
  const history = useHistory();

  function handleBackButtonClick() {
    history.goBack();
  }

  return (
    <Header>
      <HeaderContents>
        { isHome
          ? <FontAwesomeIcon size="2x" icon={faBars} onClick={handleBackButtonClick} />
          : <FontAwesomeIcon size="2x" icon={faChevronLeft} />
        }
        <HeaderTitle>{ isHome ? "Home" : "Album details" }</HeaderTitle>
      </HeaderContents>
    </Header>
  );
}

export default MainHeader;
