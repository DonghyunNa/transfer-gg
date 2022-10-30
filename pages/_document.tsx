import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class RootDocument extends Document {
  render() {
    return (
      <html lang='ko'>
        <Head>
          <link
            href='https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined'
            rel='stylesheet'
          />
          <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
          <title>겨울엔 역시 스토브리그</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
