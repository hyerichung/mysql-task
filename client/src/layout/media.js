import { css } from "styled-components";

const sizes = {
  mobile: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1200
};

export default Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media screen and (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
