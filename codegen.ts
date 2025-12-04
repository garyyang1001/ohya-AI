import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://ohya.co/graphql',
    documents: ['graphql/**/*.{ts,tsx,graphql}', 'app/**/*.{ts,tsx}'],
    ignoreNoDocuments: true,
    generates: {
        './gql/': {
            preset: 'client',
            config: {
                documentMode: 'string'
            }
        }
    }
};

export default config;
