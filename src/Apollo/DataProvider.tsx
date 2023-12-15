import {
    from,
    HttpLink,
    ApolloClient,
    ApolloProvider
} from "@apollo/client";
import { FC } from "react";
import { ProviderProps } from "./type";
import { cachePagination } from "./fieldPolicie";
import { onError } from '@apollo/client/link/error'

/**
 * GraphQL API URL.
 * @constant {string}
 */
const url = 'https://beta.pokeapi.co/graphql/v1beta';

/**
 * Configuration for the error link to handle GraphQL errors.
 * @constant {ApolloLink}
 */
const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message }) => {
            alert(`Graphql error ${message}`);
        });
    }
});

/**
 * HTTP link for connecting to the GraphQL API.
 * @constant {ApolloLink}
 */
const link = from([
    errorLink,
    new HttpLink({ uri: url })
]);

/**
 * Apollo Client instance.
 * @constant {ApolloClient}
 */
const client = new ApolloClient({
    cache: cachePagination,
    link: link
});

/**
 * Apollo data provider for the application.
 *
 * @component
 * @param {Object} props - Data provider properties.
 * @param {ReactNode} props.children - The children elements to be wrapped by the Apollo provider.
 * @returns {JSX.Element} Apollo provider component.
 */
export const DataProvider: FC<ProviderProps> = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default DataProvider;
