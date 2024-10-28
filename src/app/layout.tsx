import { ApolloWrapper } from '@shared/api/graphql/apollo-wrapper';
import { cn } from '@shared/lib/utils';
import { Toaster } from '@shared/ui/Toaster';
import { Metadata } from 'next';
import { Montserrat, Wix_Madefor_Display } from 'next/font/google';
import { ReactNode } from 'react';
import 'shaka-player/dist/controls.css';
import Providers from './Providers';
import './globals.css';

const baseFont = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-base',
  display: 'swap',
});

const headingFont = Wix_Madefor_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-heading',
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  viewport: 'width=device-width, initial-scale=1.0',
  title: {
    default: 'MovieView',
    template: '%s | MovieView',
  },
  description:
    'View multiple films and series in good quality and surround sound with minimal load on your network!',
  keywords: [
    'movie',
    'series',
    'film',
    'watch',
    'online',
    'room',
    'collection',
    'together',
    'quality',
  ],
  themeColor: [
    { media: '(prefer-color-scheme: light)', color: 'white' },
    { media: '(prefer-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    title: 'MovieView',
    description:
      'View multiple films and series in good quality and surround sound with minimal load on your network!',
    siteName: 'MovieView',
  },
  metadataBase: new URL('http://localhost:3001'),
};

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

const RootLayout = ({ children, modal }: Props) => {
  return (
    <html>
      <body
        className={cn(
          'antialiased min-h-screen font-sans flex flex-col',
          baseFont.variable,
          headingFont.variable,
        )}
      >
        <ApolloWrapper>
          {/* @ts-expect-error Async Server Component */}
          <Providers>
            <Toaster />
            {modal}
            {children}
          </Providers>
        </ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
