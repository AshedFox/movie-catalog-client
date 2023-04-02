import './globals.css';
import React, { ReactNode } from 'react';
import { Header } from '@components/common';
import Providers from './Providers';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          <div id="modal-root" />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
