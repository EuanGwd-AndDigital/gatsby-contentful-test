import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { GatsbyImage } from 'gatsby-plugin-image'

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
    <main className="container mx-auto">
      <title>Gatsby Blog</title>
      <header className="bg-white shadow">
        <div className="py-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center ">
          <h1 className="text-3xl font-bold text-gray-900">
            {data?.site.siteMetadata.title}
          </h1>
        </div>
      </header>

      {loading ? (
        <div>{`Loading...`}</div>
      ) : (
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
              <h2 className="text-2xl font-extrabold text-gray-900">Blogs</h2>

              <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                {data?.allContentfulBlogPost.nodes.map((node) => (
                  <div key={node.title} className="group relative">
                    <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                      <GatsbyImage
                        image={node?.heroImage.gatsbyImageData}
                        alt={node?.title}
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <h3 className="mt-6 text-sm text-gray-500">
                      <a href={node.slug}>
                        <span className="absolute inset-0" />
                        {node.title}
                      </a>
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
    </main>
  )
}

const HOME_PAGE_QUERY = gql`
  query HomePageQuery {
    allContentfulBlogPost {
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
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default IndexPage
