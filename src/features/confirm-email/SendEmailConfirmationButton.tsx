'use client';

import React from 'react';
import { useMutation } from '@apollo/client';
import { SendEmailConfirmationDocument } from '@shared/api/graphql';
import { useToast } from '@shared/hooks/use-toast';
import { Button } from '@shared/ui/Button';

const SendEmailConfirmationButton = () => {
  const [sendConfirmation, { loading }] = useMutation(SendEmailConfirmationDocument);
  const { toast } = useToast();

  return (
    <Button
      className="w-full"
      variant={'ghost'}
      isLoading={loading}
      size={'sm'}
      onClick={async () => {
        const { data, errors } = await sendConfirmation();

        if (data && !errors) {
          toast({
            title: 'Info',
            description: 'We sent you confirmation message, check your email.',
          });
        }
      }}
    >
      Get confirmation
    </Button>
  );
};

export default SendEmailConfirmationButton;
