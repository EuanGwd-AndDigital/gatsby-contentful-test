import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

type LayoutProps = {
  pageTitle: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <main className="container mx-auto">
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header className="bg-white shadow">
        <div className="py-6 px-4 sm:px-6 lg:px-8 flex justify-center items-center ">
          <h1 className="text-3xl font-bold text-gray-900">
            {data?.site.siteMetadata.title}
          </h1>
        </div>
      </header>
      <div>{children}</div>
    </main>
  )
}

export default Layout
