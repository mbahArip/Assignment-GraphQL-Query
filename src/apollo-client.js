import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://arief-rachmawan-20.hasura.app/v1/graphql',
	headers: {},
	cache: new InMemoryCache(),
});

export default client;
