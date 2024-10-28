'use client';

import { ApolloError, useMutation } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { UpdatePasswordDocument } from '@shared/api/graphql';
import { useToast } from '@shared/hooks/use-toast';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@shared/ui';
import Crypto from 'crypto';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { schema } from '../model/schema';

type Input = z.infer<typeof schema>;

const EditPasswordForm = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      newPassword: '',
      oldPassword: '',
    },
  });
  const [editable, setEditable] = useState<boolean>(false);
  const [updatePassword, { loading }] = useMutation(UpdatePasswordDocument);
  const { toast } = useToast();

  const onSubmit = async (input: Input) => {
    try {
      const { data } = await updatePassword({
        variables: {
          newPassword: Crypto.createHash('sha512').update(input.newPassword).digest('hex'),
          oldPassword: Crypto.createHash('sha512').update(input.oldPassword).digest('hex'),
        },
      });

      if (data) {
        setEditable(false);
        toast({
          title: 'Success',
          description: 'Successfully updated password!',
          variant: 'success',
        });
      }
    } catch (error) {
      if (error instanceof ApolloError) {
        toast({
          title: 'Error',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Unknown error!',
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form className="space-y-0.5 w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-end gap-1">
          {editable && (
            <div className="flex flex-auto gap-2">
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old password</FormLabel>
                    <FormControl>
                      <Input placeholder="********" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        autoComplete="new-password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
          {editable && (
            <div className="flex gap-1 ml-auto">
              <Button size="sm" disabled={loading}>
                Save
              </Button>
              <Button
                variant="destructive"
                size="sm"
                type="button"
                disabled={loading}
                onClick={() => setEditable(false)}
              >
                Cancel
              </Button>
            </div>
          )}
        </div>
        <FormMessage>{form.formState.errors.root?.message}</FormMessage>
        {!editable && (
          <Button
            className="w-full"
            type="button"
            size="sm"
            onClick={() => {
              form.reset();
              setEditable(true);
            }}
          >
            Edit password
          </Button>
        )}
      </form>
    </Form>
  );
};

export default EditPasswordForm;
