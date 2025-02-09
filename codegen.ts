import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:3000/graphql',
  documents: 'src/**/*.graphql',
  overwrite: true,
  ignoreNoDocuments: true,
  config: {
    scalars: {
      DateTime: 'string',
    },
    namingConvention: {
      enumValues: 'keep',
    },
    dedupeOperationSuffix: true,
  },
  hooks: { afterAllFileWrite: ['npm run format'] },
  generates: {
    './src/shared/api/graphql/__generated__/': {
      preset: 'client',
      presetConfig: {
        nonOptionalTypename: true,
        dedupeFragments: true,
        fragmentMasking: false,
      },
    },
  },
};
export default config;
