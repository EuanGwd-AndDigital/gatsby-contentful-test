import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

type DataNodeProps = {
  title: string
  heroImage: { gatsbyImageData: IGatsbyImageData }
  slug: string
  description: {
    description: string
  }
}

const IndexPage = () => {
  const { data, error, loading } = useQuery(HOME_PAGE_QUERY)

  if (error)
    return (
      <main className="container mx-auto">
        <h1>{`Oops, something went wrong`}</h1>
        <p>{error.message}</p>
      </main>
    )

  return (
    <Layout pageTitle="Gallery">
      {loading ? (
        <div>{`Loading...`}</div>
      ) : (
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {data?.blog.nodes.map((node: DataNodeProps) => (
                  <div key={node.title} className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <GatsbyImage
                        image={node?.heroImage.gatsbyImageData}
                        alt={node?.title}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <Link to={`/blog/${node.slug}`}>
                        <span className="absolute inset-0" />
                        {node.title}
                      </Link>
                    </h3>
                    <p className="text-base font-semibold text-gray-900">
                      {node.description.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

const HOME_PAGE_QUERY = gql`
  query HomePageQuery {
    blog: allContentfulBlogPost {
      nodes {
        title
        slug
        description {
          description
        }
        heroImage {
          gatsbyImageData
        }
      }
    }
    site: site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
