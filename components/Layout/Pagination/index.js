import React from 'react';
import { css } from '@emotion/core';
import { pagin_block, pagin_list, pagin_item } from './style';
import { parse } from 'path';

class Pagination extends React.Component{

  handleClick = (ev) => {
   const target = ev.target;
   if(target.tagName === 'LI') {
     console.log('!!! target VALUE ',target.innerHTML);
     let count = parseInt(target.innerHTML);
     this.props.handleClick(count - 1);
   } 
   return false;
  }

  render() {
      return (
      <div css={pagin_block}>
        <ul css={pagin_list} onClick={this.handleClick}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      )
    }
}

export default Pagination;