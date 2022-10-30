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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
