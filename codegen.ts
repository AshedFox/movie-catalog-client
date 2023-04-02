import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: [
    'src/app/**/*.tsx',
    'src/components/**/*.tsx',
    'src/lib/graphql/apollo-client.ts',
  ],
  ignoreNoDocuments: true,
  hooks: {
    afterAllFileWrite: 'npm run format',
  },
  generates: {
    './src/lib/graphql/__generated__/': {
      preset: 'client',
      config: {
        scalars: {
          DateTime: 'string',
        },
        namingConvention: {
          enumValues: 'keep',
        },
      },
    },
  },
};
export default config;
