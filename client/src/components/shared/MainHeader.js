import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 60px;
  position: absolute;
  z-index: 1;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.main};
`;

const HeaderContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  position: relative;
`;

const HeaderTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

const HeaderBackButton = styled.div`
  width: 3rem;
  font-size: 23px;
  cursor: pointer;
`;

const HeaderTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: 3rem;
`;

function MainHeader({ title, backIcon, onHeaderLeftIconClick }) {
  return (
    <Header>
      <HeaderContents>
        <HeaderBackButton>
          <FontAwesomeIcon icon={backIcon} onClick={onHeaderLeftIconClick} />
        </HeaderBackButton>
        <HeaderTitleWrapper>
          <HeaderTitle>{title}</HeaderTitle>
        </HeaderTitleWrapper>
      </HeaderContents>
    </Header>
  );
}

export default MainHeader;
