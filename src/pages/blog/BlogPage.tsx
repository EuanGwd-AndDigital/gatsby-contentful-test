import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Layout from '../../components/layout'

type BlogPageProps = {
  location: string
}

const BlogPage = ({ location }: BlogPageProps) => {
  const { data, error, loading } = useQuery(BLOG_PAGE_QUERY)

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
        <div key={data?.title} className="group relative">
          <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
            <GatsbyImage
              image={data?.heroImage.gatsbyImageData}
              alt={data?.title}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <span className="absolute inset-0" />
            {data?.title}
          </h3>
          <p className="text-base font-semibold text-gray-900">
            {data?.description.description}
          </p>
        </div>
      )}
      <Link to={`/}`}>Back</Link>
    </Layout>
  )
}

const BLOG_PAGE_QUERY = gql`
  query BlogPostQuery {
    post: contentfulBlogPost {
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
