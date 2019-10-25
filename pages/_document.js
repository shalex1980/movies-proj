import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { css } from '@emotion/core';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body css={bodyCss}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

const bodyCss = css`
    margin: 0;
    padding: 0;
    font-size: 1em;
    line-height: 1em;
    `;

export default MyDocument