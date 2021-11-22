import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
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
            <Card>
              <p>{node?.title}</p>

              <GatsbyImage
                image={node?.heroImage.gatsbyImageData}
                alt={node?.title}
              />
            </Card>
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
        heroImage {
          gatsbyImageData
        }
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

const Card = styled.li`
  max-width: 100%;
`

export default IndexPage
