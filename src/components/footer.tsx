import React from "react"
import { Link } from "gatsby"
//@ts-ignore
import Github from '../images/github.inline.svg'
//@ts-ignore
import Linkedin from '../images/linkedin.inline.svg'
import "../assets/components/footer.css"

const Footer = () => {
  return (
    <footer>
      <nav className="footer-nav">
        <Link className='links' to="/page-2/">
          Go to page 2
        </Link>
        <Link className='links' to="/using-typescript/">
          Go to "Using TypeScript"
        </Link>
      </nav>
      <div className='social-media'>
        <a className='links' href='https://github.com/Josedav9' target='_blank'>
          <Github />
        </a>
        <a className='links' href='https://www.linkedin.com/in/jose-alvarez-223731136/' target='_blank'>
          <Linkedin />
        </a>
      </div>
      <div className='copy'>
        &copy; Jose Alvarez { new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer
