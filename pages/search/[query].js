import React from 'react';
import { useRouter } from 'next/router';
import Container from '../../components/Layout/Container';
import Header from '../../components/Layout/Header';
import Content from '../../components/Layout/Content';



const Search = () => {
  
    const router = useRouter();
  
    return (
      <Container title="Search">
        <Header />
        <Content>
          <h1>{router.query.query}</h1>
          <p>This is the blog post content.</p>
        </Content>
      </Container>
    )

}

export default Search;