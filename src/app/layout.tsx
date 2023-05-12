import './globals.css';
import 'shaka-player/dist/controls.css';
import React, { ReactNode } from 'react';
import Providers from './Providers';
import { Montserrat } from 'next/font/google';
import { Header } from '@widgets/header';
import { Metadata } from 'next';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1.0',
  title: 'MovieView',
};

const RootLayout = ({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) => {
  return (
    <html className={montserrat.className}>
      <body>
        <Providers>
          <div id="modal-root">{modal}</div>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
