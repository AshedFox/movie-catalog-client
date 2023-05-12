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
  /* generates: {
    'src/shared/api/graphql/__generated__/types.ts': {
      plugins: ['typescript'],
    },
    'src/': {
      preset: 'near-operation-file',
      presetConfig: {
        folder: '__generated__',
        extension: '.generated.ts',
        baseTypesPath: 'shared/api/graphql/__generated__/types.ts',
      },
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      config: {
        dedupeOperationSuffix: true,
      },
    },
  },*/
  /* generates: {
    'src/shared/api/graphql/__generated__/types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        dedupeOperationSuffix: true,
      },
    },
  },*/
};
export default config;
