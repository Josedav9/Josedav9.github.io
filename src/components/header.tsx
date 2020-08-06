import { Link, useStaticQuery, graphql } from "gatsby"
//@ts-ignore
import Logo from "../images/logo2.inline.svg"
//@ts-ignore
import Burger from "../images/parrilla.inline.svg"
import React, { useState } from "react"
import "../assets/components/header.css"

const Header = () => {
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

  const [isOpen, setOpen] = useState(false)

  const handleBurgerClick = () => {
    setOpen(!isOpen)
  }

  const openNav = () => {
    return (
      <nav className="navigation-links">
        <div className="links">
          <Link to="/page-2/">Go to page 2</Link>
        </div>
        <div className="links">
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </div>
      </nav>
    )
  }

  return (
    <header>
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

      <div className="navigation-mobile">
        <div className="mobile-logo">
          <Logo />
        </div>
        <button onClick={handleBurgerClick} className="burger-button">
          <Burger />
        </button>
      </div>
      {isOpen ? openNav() : ""}
    </header>
  )
}

export default Header
