import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Navbar from './Navbar'

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
      <Navbar title={data?.site.siteMetadata.title} />
      <div className="mt-5 w-full">{children}</div>
    </main>
  )
}

export default Layout
