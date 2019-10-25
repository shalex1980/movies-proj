import React from 'react';
import { css } from '@emotion/core';
import { header } from './styles';
import Search from '../Search';

const Header = () => {
  return (
    <header css={header}>
      <Search />
    </header>
  )
}

export default Header;