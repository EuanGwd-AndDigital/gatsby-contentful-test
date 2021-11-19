import React from 'react'
import styled from 'styled-components'

const IndexPage = () => {
  return (
    <Main>
      <title> Gatsby Blog</title>
      <Header>Home Page</Header>
    </Main>
  )
}

const Main = styled.main`
  display: grid;
  place-items: center;
`

const Header = styled.h1`
  color: royalblue;
`

export default IndexPage
