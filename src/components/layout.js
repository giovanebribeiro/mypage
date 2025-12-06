import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { siteMetadata } from "../config/site"

import Header from "./header"
import "./layout.css"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const ViteLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => (
  <>
    <Header siteTitle={siteMetadata.title} />
    <Content>
      <main>{children}</main>
      <Footer>
        <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        </p>
        <ViteLink href="https://vitejs.dev">Vite</ViteLink>
        {` + `}
        <ViteLink href="https://react.dev">React</ViteLink>
      </Footer>
    </Content>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
