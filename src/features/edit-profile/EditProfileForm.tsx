'use client';

import { ApolloError, useMutation, useSuspenseQuery } from '@apollo/client';
import { zodResolver } from '@hookform/resolvers/zod';
import { SelectValue } from '@radix-ui/react-select';
import {
  GetAllCountriesDocument,
  MovieTypeEnum,
  SortDirectionEnum,
  UpdateMeDocument,
} from '@shared/api/graphql';
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@shared/ui';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { schema } from './schema';
import { useSession } from '@features/auth/session';

type Input = z.infer<typeof schema>;

const EditProfileForm = () => {
  const session = useSession();
  const user = session.data?.user;

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: user?.email,
      name: user?.name,
      countryId: user?.country?.id,
    },
  });

  const { toast } = useToast();

  const { data: countriesData } = useSuspenseQuery(GetAllCountriesDocument, {
    variables: {
      movieType: MovieTypeEnum.Film,
      sort: {
        name: {
          direction: SortDirectionEnum.ASC,
        },
      },
    },
  });
  const [updateMe] = useMutation(UpdateMeDocument);

  const onSubmit = async (input: Input) => {
    try {
      const { data, errors } = await updateMe({
        variables: {
          input,
        },
      });

      if (data && !errors) {
        toast({
          title: 'Success',
          description: 'Successfully updated profile information!',
          variant: 'success',
        });

        await session.update(true);
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
          description: 'Failed to update profile!',
          variant: 'destructive',
        });
      }
    }
  };

  const countries = countriesData.getAllCountries;

  return (
    <Form {...form}>
      <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Johnson" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          name="name"
        />
        <FormField
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select
                disabled={!countries}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country.id} value={country.id}>
                      {country.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
          name="countryId"
        />
        <Button
          type="submit"
          isLoading={form.formState.isLoading}
          disabled={!form.formState.isDirty}
        >
          Update Profile
        </Button>
      </form>
    </Form>
  );
};

export default EditProfileForm;
