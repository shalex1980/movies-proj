import { css } from '@emotion/core';

export const pagin_block = css`
  width: 300px;
  margin: auto;
  border: solid 1px black;
`;

export const pagin_list = css`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  li {
    width: 30px;
    height: 30px;
    text-align: center;
    border: solid 1px black;
  }
`;

export const pagin_item = css`
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  border: solid 1px black;
`;