import React from 'react';
import Head from 'next/head';

const Container = ({children, title}) => {
  return (
    <div >
      <Head>
        <title>{title}</title>
      </Head>
     {children}
    </div>
  )
}

export default Container;