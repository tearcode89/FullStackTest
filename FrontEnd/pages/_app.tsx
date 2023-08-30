import type { AppProps } from 'next/app';
import '../styles/globals.css'
import {ApolloProvider, ApolloClient, InMemoryCache, ApolloClientOptions} from '@apollo/client'
export default function App({ Component, pageProps}: AppProps) {

    const client = new ApolloClient({
        uri: "http://127.0.0.1:4000/graphql",
        cache: new InMemoryCache()
    })

    return(
        <>
            <ApolloProvider client={client}>
                <Component {...pageProps}/>
            </ApolloProvider>
        </>
    )
}