import React from 'react';
import { connect } from 'react-redux';
import { initialArticle } from '../modules/actions/articles';
import { jsx, css } from '@emotion/core';
import Container from '../components/Layout/Container';
import Header from '../components/Layout/Header';
import Content from '../components/Layout/Content';
import PreArticle from '../components/Layout/PreArticle';
import Pagination from '../components/Layout/Pagination';

class HomePage extends React.Component{
  state = {
    count: 0,
    countOnPage: 4
  }

  handleClick = () => {
    this.props.initialArticle();
  }

  handlePagin = (count) => {
    this.setState({count : this.state.countOnPage * count});
  }

  render() {
    const { result, loading, loaded }= this.props;

    let tmp;
      if(loading) {
        tmp = <h2>Loading ...</h2>
      }
      else if(loaded) {
        tmp = result.slice(this.state.count, this.state.count + this.state.countOnPage).map( show => <PreArticle {...show} key={show.id} />)
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
          { 
            result && result.length > 0 ?
            <Pagination size={result.length} handleClick={this.handlePagin}/> : 
            null
          }
          
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
    const flag = store.search.flag;
  return  { 
    loading: flag ? store.search.loading : store.article.loading,
    loaded: flag ?  store.search.loaded : store.article.loaded,
    result: flag ? store.search.result : store.article.result,
  }
},{initialArticle})(HomePage);