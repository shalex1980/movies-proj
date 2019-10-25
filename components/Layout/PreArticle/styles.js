import { css } from '@emotion/core';

export const article = css`
  width: 37%;
  margin: 20px;
  padding: 20px;
  background: #f3f3f3;
  color: #000;
  border: solid 1px orange;
  figure {
    text-align: center;
  }
  figcaption {
    margin-bottom: 20px;
    text-align: center;
    font-size: 1.8em;
    font-weight: bolder;
  }
  ul {
    list-style-type: none;
    font-weight: bolder;
    line-height: 1.2em;
    font-size: 18px;
  }
`;