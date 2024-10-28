import React, { useCallback } from 'react';
import { useToast } from '@shared/hooks/use-toast';
import { ToastAction } from '@shared/ui/Toast';
import { useMutation } from '@apollo/client';
import { SendEmailConfirmationDocument } from '@shared/api/graphql';

export const useEmailConfirmationToast = () => {
  const { toast } = useToast();
  const [sendConfirmation] = useMutation(SendEmailConfirmationDocument);

  const handleActionClick = useCallback(async () => {
    const { data, errors } = await sendConfirmation();

    if (data && !errors) {
      toast({
        title: 'Info',
        description: 'We sent you confirmation message, check your email.',
      });
    }
  }, [sendConfirmation, toast]);

  const confirmationToast = useCallback(
    () =>
      toast({
        variant: 'warning',
        title: 'Warning!',
        description: 'Your email is not confirmed!',
        action: (
          <ToastAction altText="Get confirmation" onClick={handleActionClick}>
            Get confirmation
          </ToastAction>
        ),
      }),
    [handleActionClick, toast],
  );

  return {
    confirmationToast,
  };
};
