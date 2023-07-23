import './globals.css';
import 'shaka-player/dist/controls.css';
import React, { ReactNode } from 'react';
import Providers from './Providers';
import { Montserrat } from 'next/font/google';
import { Header } from '@widgets/header';
import { Metadata } from 'next';
import { ApolloWrapper } from '@shared/api/graphql/apollo-wrapper';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1.0',
  title: 'MovieView',
};

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

const RootLayout = ({ children, modal }: Props) => {
  return (
    <html className={montserrat.className}>
      <body className="dark:text-white">
        <ApolloWrapper>
          <Providers>
            <div id="modal-root">{modal}</div>
            <Header />
            {children}
          </Providers>
        </ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
