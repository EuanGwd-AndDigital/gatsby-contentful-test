import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const IndexPage = () => {
  const { data, error, loading } = useQuery(HOME_PAGE_QUERY)
  console.log('file: index.tsx -> line 8 -> IndexPage -> error', error)
  // const { nodes } = data?.allContentfulBlogPost

  if (error)
    return (
      <Main>
        <h1>{`Oops, something went wrong`}</h1>
        <p>{`${error}`}</p>
      </Main>
    )

  return (
    <Main>
      <title>Gatsby Blog</title>
      <Header>Home Page</Header>

      {loading ? (
        <div>{`Loading...`}</div>
      ) : (
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
      )}
    </Main>
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
