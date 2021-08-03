import { css } from "styled-components";

const deviceSizes = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200
};

export default Object.keys(deviceSizes).reduce((acc, deviceType) => {
  acc[deviceType] = (...args) => css`
    @media screen and (min-width: ${deviceSizes[deviceType]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
