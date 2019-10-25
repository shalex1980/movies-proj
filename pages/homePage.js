import React from 'react';
import { connect } from 'react-redux';
import { initialArticle } from '../modules/actions/articles';
import { jsx, css } from '@emotion/core';
import Container from '../components/Layout/Container';
import Header from '../components/Layout/Header';
import Content from '../components/Layout/Content';
import PreArticle from '../components/Layout/PreArticle';
import fetch from 'isomorphic-unfetch';

class HomePage extends React.Component{
  
  componentDidMount() {
    this.props.initialArticle();
  }

  handleClick = () => {
    this.props.initialArticle();
  }

  render() {
    const { result, loading, loaded }= this.props;
    let tmp;
      if(loading) {
        tmp = <h2>Loading ...</h2>
      }
      else if(loaded) {
        tmp = result.map( show => <PreArticle {...show} key={show.id} />)
      }
    return (
      <Container title="HomePage">
        <Header />
        <Content>
          <h1>Home Page  { this.props.loading !==  undefined && this.props.loading.toString() }</h1>
          <button onClick={this.handleClick} >CLick ME</button>

          <div style={wrap}>
              { tmp }
          </div>

        </Content>
      </Container>
    )
  }
}

const wrap = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  padding: '20px',
}


export default connect(store => {
  /*return {
    loading: store.loading,
    loaded: store.loaded,
    result: store.result
  }*/
  //let obj =  store.article(initialArticle());
 // console.log(store);
  return  { 
    loading: store.article.loading,
    loaded: store.article.loaded,
    result: store.article.result
  }
},{initialArticle})(HomePage);