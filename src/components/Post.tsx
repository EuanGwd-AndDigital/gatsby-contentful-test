import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { GatsbyImage } from 'gatsby-plugin-image'

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

  if (loading) return <div>{`Loading...`}</div>

  if (error)
    return (
      <main className="container mx-auto">
        <h1>{`Oops, something went wrong`}</h1>
        <p>{error.message}</p>
      </main>
    )

  return (
    <Layout pageTitle="My Blog Posts">
      <section key={data?.post?.title} className="bg-white dark:bg-gray-800">
        <div className="container px-6 py-8 mx-auto">
          <div className="items-center lg:flex">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                {data?.post?.title}
              </h2>

              <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-80 max-h-80 overflow-y-auto">
                {data?.post.body.childMdx.rawBody}
              </p>

              <div className="flex items-center justify-between mt-4">
                <div className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                  {data?.post?.publishDate}
                </div>

                <div className="flex items-center">
                  <GatsbyImage
                    className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                    image={data?.post?.author.image.gatsbyImageData}
                    alt={data?.post?.title}
                  />
                  <div className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">
                    {data?.post?.author.name}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <div className="flex items-center justify-center lg:justify-end">
                <div className="max-w-lg">
                  <GatsbyImage
                    className="object-cover object-center w-full h-64 rounded-md shadow"
                    image={data?.post?.heroImage.gatsbyImageData}
                    alt={data?.post?.title}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
        image {
          gatsbyImageData
        }
      }
      publishDate
      body {
        childMdx {
          rawBody
        }
      }
    }
  }
`

export default BlogPage
