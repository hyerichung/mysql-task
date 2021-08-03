import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const AlbumImg = styled.img`
  height: 100%;
`;

const DefaultAlbumImg = styled.div`
  height: 100%;
  width: 15%;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function PlayerImg({ coverUrl }) {
  return (
    <>
      { coverUrl
        ? <AlbumImg src={coverUrl} />
        : <DefaultAlbumImg>
          <FontAwesomeIcon icon={faMusic} />
        </DefaultAlbumImg>
      }
    </>
  );
}

export default PlayerImg;
