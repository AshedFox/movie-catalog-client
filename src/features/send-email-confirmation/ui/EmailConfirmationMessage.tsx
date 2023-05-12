'use client';

import React from 'react';
import { useMutation } from '@apollo/client';
import { Button } from '@shared/ui';
import { SendEmailConfirmationDocument } from '@shared/api/graphql';

const EmailConfirmationMessage = () => {
  const [sendConfirmation, { loading }] = useMutation(
    SendEmailConfirmationDocument,
  );

  return (
    <div className="flex flex-col gap-2 overflow-hidden items-start py-2 px-4 bg-amber-400 dark:bg-amber-600 rounded">
      Your email not confirmed yet! Please press the button downside - and we
      will send you email with confirmation link!
      <Button
        variant={'secondary'}
        disabled={loading}
        size={'sm'}
        onClick={async () => {
          const { data, errors } = await sendConfirmation();

          if (data && !errors) {
            window.alert('Check your mail for confirmation!');
          }
        }}
      >
        Send confirmation
      </Button>
    </div>
  );
};

export default EmailConfirmationMessage;
