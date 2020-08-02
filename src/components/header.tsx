import { Link, useStaticQuery, graphql } from "gatsby"
//@ts-ignore
import Logo from "../images/logo2.inline.svg"
import React from "react"
import "../assets/components/header.css"

type HeaderProps = {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 20, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className="">
      <nav className="navigation">
        <div>
          <Logo />
        </div>
        <div>
          <Link className="links" to="/page-2/">
            Go to page 2
          </Link>
          <Link className="links" to="/using-typescript/">
            Go to "Using TypeScript"
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
