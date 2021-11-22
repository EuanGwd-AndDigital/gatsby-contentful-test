import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
import styled from 'styled-components'

const client = new ApolloClient({
  uri: 'http://localhost:8000/___graphql',
  cache: new InMemoryCache(),
})

const IndexPage = () => {
  const { data } = useQuery(HOME_PAGE_QUERY)
  // const { nodes } = data?.allContentfulBlogPost

  return (
    <ApolloProvider client={client}>
      <Main>
        <title>Gatsby Blog</title>
        <Header>Home Page</Header>

        <ul>
          {data?.allContentfulBlogPost.nodes.map((node) => (
            <li>{node?.title}</li>
          ))}
        </ul>
      </Main>
    </ApolloProvider>
  )
}

const HOME_PAGE_QUERY = gql`
  query BlogListing {
    allContentfulBlogPost {
      nodes {
        title
      }
    }
  }
`

const Main = styled.main`
  display: grid;
  place-items: center;
`

const Header = styled.h1`
  color: royalblue;
`

export default IndexPage
