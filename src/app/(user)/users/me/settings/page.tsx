import React from 'react';
import { LogoutButton } from '@features/logout';
import { Metadata } from 'next';
import { EditEmailForm } from '@features/edit-email';
import { EditNameForm } from '@features/edit-name';
import { EditPasswordForm } from '@features/edit-password';
import { ManageSubscriptionLink } from 'features/manage-subscription';

export const metadata: Metadata = { title: 'Settings' };

const Page = () => {
  return (
    <main className="flex flex-col pl-4 flex-auto gap-2 md:gap-5">
      <h1 className="font-semibold text-3xl leading-tight">Settings</h1>
      <div className="flex flex-col gap-3 flex-auto">
        <EditEmailForm />
        <EditNameForm />
        <EditPasswordForm />
        <ManageSubscriptionLink />
        <LogoutButton />
      </div>
    </main>
  );
};

export default Page;
