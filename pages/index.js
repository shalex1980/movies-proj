import React from 'react';
import Link from 'next/link';
import { jsx, css } from '@emotion/core';
import Container from '../components/Layout/Container';
import Header from '../components/Layout/Header';
import Content from '../components/Layout/Content';
import PreArticle from '../components/Layout/PreArticle';
import fetch from 'isomorphic-unfetch';

const IndexPage = (props) => {
  return (
    <Container title="IndexPage">
      <Header />
      <Content>
        <h1>Index Page </h1>
        <ul>
          {props.shows.map(show => (
            <li key={show.id}>
              <Link href={show.url} >
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  )
}

const wrap = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  padding: '20px',
}

IndexPage.getInitialProps = async function() {
  let res ;
  try{
    res = await fetch('https://api.tvmaze.com/search/shows?q=thor');
  } catch(e) {
    throw e;
  }
  
  const data = await res.json();

  return {
    shows: data.map(entry => entry.show)
  }
}

export default IndexPage;