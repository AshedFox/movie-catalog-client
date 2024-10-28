import { SignUpModal } from '@widgets/sign-up-modal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign-Up',
};

const Page = () => {
  return <SignUpModal />;
};

export default Page;
