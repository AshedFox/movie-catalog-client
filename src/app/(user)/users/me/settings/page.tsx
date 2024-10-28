import { EditPasswordForm } from '@features/edit-password';
import { EditProfileForm } from '@features/edit-profile';
import { LogoutButton } from '@features/logout';
import { ManageSubscriptionLink } from 'features/manage-subscription';
import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Settings' };

const Page = () => {
  return (
    <main className="flex flex-col flex-auto gap-2 md:gap-5 py-10">
      <h1 className="font-semibold text-3xl leading-tight">Settings</h1>
      <div className="flex flex-col gap-3 flex-auto">
        <EditProfileForm />
        <EditPasswordForm />
        <ManageSubscriptionLink />
        <LogoutButton />
      </div>
    </main>
  );
};

export default Page;
