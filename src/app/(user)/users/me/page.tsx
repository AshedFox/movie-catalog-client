import ClientContent from './ClientContent';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = { title: 'Me' };

const Page = async () => {
  return <ClientContent />;
};

export default Page;
