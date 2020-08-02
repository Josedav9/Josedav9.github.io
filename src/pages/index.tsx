import React from "react"
//@ts-ignore
import FrontEnd from "../images/front.inline.svg"
//@ts-ignore
import BackEnd from "../images/back.inline.svg"
//@ts-ignore
import CloudComputing from "../images/cloud.inline.svg"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import "../assets/page/index.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { relativeDirectory: { eq: "work-logos" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                srcSet
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Jose Alvarez" />
      <div className="greeting">
        <div>
          <h1>Full-Stack Developer & Cloud Computing Enthusiastic</h1>
          <p>I like to build product to makes our lives easier</p>
          <div className="greeting-img">
            <Image />
          </div>
        </div>
      </div>

      <div className="about-me">
        <h2>Hi, I’m Jose. Nice to meet you.</h2>
        <p>
          Since the beginning of my career nearly 4 years ago, I've been
          developing using different JS frameworks to accomplish one of the
          things that i'm most passionate about that is making people live
          easier. Along my front-end experience i've been leaning backed
          development as well with nodejs creating several API to make my web
          apps dynamic. Finally last year i start my journey in cloud computing
          learning GCP and AWS
        </p>
      </div>

      <section className="skills">
        <div className="skills-container">
          <div className="skill-card">
            <figure className="card-image">
              <FrontEnd />
            </figure>
            <h3 className="title is-size-4 is-spaced">Front End</h3>
            <p>
              I enjoy bringing ideas to life in the browser using best practices
              in accessibility and design patterns.
            </p>
            <p className="list-title">Languages I speak:</p>
            <p>HTML, CSS, SASS, Javascript</p>
            <p className="list-title">Frameworks/Libraries:</p>
            <ul>
              <li>React</li>
              <li>Angular</li>
              <li>JQuery</li>
              <li>Gatsby</li>
              <li>NextJS</li>
              <li>Cypress</li>
              <li>Jest</li>
            </ul>
          </div>
          <div className="skill-card">
            <figure className="card-image">
              <BackEnd />
            </figure>
            <h3 className="title is-size-4 is-spaced">Back End</h3>
            <p>
              Create fast, secure and highly scalable service to be consume by
              any app in a simple way prioritizing business requirements
            </p>
            <p className="list-title has-text-primary has-text-weight-normal">
              Languages I speak:
            </p>
            <p>Python, Javascript, Java, SQL</p>
            <p className="list-title has-text-primary has-text-weight-normal">
              Frameworks/Platforms
            </p>
            <ul>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Django</li>
              <li>Flask</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Spring Boot</li>
            </ul>
          </div>
          <div className="skill-card">
            <figure className="card-image">
              <CloudComputing />
            </figure>
            <h3 className="title is-size-4 is-spaced">Cloud Computing</h3>
            <p>
              Serverless application that are fast and able to work no matter
              the amount of user connected concurrently
            </p>
            <p className="list-title has-text-primary has-text-weight-normal">
              Platform I have work with:
            </p>
            <p>AWS, Firebase</p>
            <p className="list-title has-text-primary has-text-weight-normal">
              Services:
            </p>
            <ul>
              <li>Lambda</li>
              <li>RDS</li>
              <li>EC2</li>
              <li>Cloud Front</li>
              <li>API gateway</li>
              <li>SQS</li>
              <li>Firebase Firestore</li>
              <li>Firebase Hosting</li>
              <li>Firebase Cloud functions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="work-experience">
        <h2>This are some of the companies I worked for</h2>
        <div className="company-logos">
          {data.allFile.edges.map(({ node }) => (
            <Img
              key={node.base.split(".")[0]}
              fluid={node.childImageSharp.fluid}
              alt={node.base.split(".")[0]}
            />
          ))}
        </div>
      </section>

      <section className="contact">
        <div className="contact-container">
          <div className="contact-title">Start a project</div>
          <div className="contact-info">
            Do you have business idea and don't know how to start? Let's chat.
            I'll buy the coffee
          </div>
          <div className="contact-link">Let's do it</div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
