import React from 'react';
import { css } from '@emotion/core';
import { connect } from 'react-redux';
import { actionSearch } from '../../../modules/actions/search';
import { search } from './styles';

class Search extends React.Component {
  state = {
    query: ''
  }
  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.actionSearch(this.state.query)
  }

  handleChange = (ev) => {
    this.setState({ query : ev.target.value });
  }

  render () {
    return (
      <form css={search} onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Search
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
      </form>
    )
  }
}

export default connect(null, {actionSearch})(Search);