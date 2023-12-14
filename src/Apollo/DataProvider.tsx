import {
    ApolloClient,
    ApolloProvider,
    HttpLink,
    from
} from "@apollo/client";
import { onError } from '@apollo/client/link/error'
import { FC } from "react";
import { cachePagination } from "./fieldPolicie";
import { ProviderProps } from "./type";

const url = 'https://beta.pokeapi.co/graphql/v1beta'

const errorLink = onError(({ graphQLErrors }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message }) => {
            alert(`Graphql error ${message}`)
        })
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: url })]);

const client = new ApolloClient({
    cache: cachePagination,
    link: link
});



export const DataProvider: FC<ProviderProps> = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default DataProvider