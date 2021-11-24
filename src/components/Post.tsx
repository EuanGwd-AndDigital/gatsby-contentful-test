import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Layout from './Layout'

type BlogPageProps = {
  pageContext: {
    postId: String
  }
}

const BlogPage = ({ pageContext: { postId } }: BlogPageProps) => {
  const { data, error, loading } = useQuery(BLOG_PAGE_QUERY, {
    variables: {
      postId,
    },
  })

  if (error)
    return (
      <main className="container mx-auto">
        <h1>{`Oops, something went wrong`}</h1>
        <p>{error.message}</p>
      </main>
    )

  return (
    <Layout pageTitle="My Blog Posts">
      {loading ? (
        <div>{`Loading...`}</div>
      ) : (
        <div key={data?.post?.title} className="group relative">
          <h1 className="mt-6 text-sm text-gray-500">
            <span className="absolute inset-0" />
            {data?.post?.title}
          </h1>
          <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <GatsbyImage
              image={data?.post?.heroImage.gatsbyImageData}
              alt={data?.post?.title}
              className="w-full h-full object-center object-cover"
            />
          </div>
          {/* <p className="text-base font-semibold text-gray-900">
            {data?.post?.description.description}
          </p> */}
        </div>
      )}
      <Link to={`/`}>Back</Link>
    </Layout>
  )
}

const BLOG_PAGE_QUERY = gql`
  query BlogPostQuery($postId: String!) {
    post: contentfulBlogPost(id: { eq: $postId }) {
      id
      title
      heroImage {
        gatsbyImageData
      }
      author {
        name
      }
      body {
        body
      }
    }
  }
`

export default BlogPage
