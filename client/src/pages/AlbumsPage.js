import React from "react";
import styled from "styled-components";

const Wrpper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: yellow;
  /* --vh: 10.15px; */
  /* height: calc(var(--vh, 1vh) * 60); */

  ${({ theme }) => theme.laptop`
    width: 414px;
    height: 800px;
    min-height: 800px;
    box-shadow: 5px 5px 20px 20px rgb(0 0 0 / 10%);
  `}
`;

export default function AlbumsPage({
  onAlbumClick
}) {
  return (
    <>
      <Wrpper>
        <h1>hi</h1>
      </Wrpper>
    </>
  );
}