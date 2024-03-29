import React from 'react';
import { css } from '@emotion/core';
import Link from 'next/link';
import { article } from './styles';

const PreArticle = (props) => {

  return (
    <article css={ article }>
      <figure> 
       <figcaption>{props.name}</figcaption>
        { 
          (props.image && props.image.medium) ? 
           <img src={props.image.medium} alt={props.name}/> : 
           <h3>Not image</h3>
        }
      </figure>
      <ul>
        <li>Genre: {props.genres}</li>
        <li>Rating: {props.rating.average}</li>
     </ul>
    </article>
  )
}

export default PreArticle;