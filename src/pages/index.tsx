import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "../assets/page/index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Jose Alvarez" />
    <div className="greeting">
      <div>
        <h1>Full-Stack Developer & Cloud Computing Enthusiastic</h1>
        <p>
          I like to build product that have impact and makes our lives easier
        </p>
        <div className="greeting-img">
          <Image />
        </div>
      </div>
    </div>

    <div className="about-me">
      <h2>Hi, I’m Jose. Nice to meet you.</h2>
      <p>
        Since the beginning of my career nearly 4 years ago, I've been
        developing using different JS frameworks to accomplish one of the things
        that i'm most passionate about that is making people live easier. Along
        my front-end experience i've been leaning backed development as well
        with nodejs creating several API to make my web apps dynamic. Finally
        last year i start my journey in cloud computing learning GCP and AWS
      </p>
    </div>

    <section className="skills">
      <div className="skills-container">
        <div className="skill-card">
          <figure className="card-image">
            <img src="" alt="" />
          </figure>
          <h3 className="title is-size-4 is-spaced">Designer</h3>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Things I enjoy designing:
          </p>
          <p>UX, UI, Web, Mobile, Apps, Logos</p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Design Tools:
          </p>
          <ul>
            <li>Balsamiq Mockups</li>
            <li>Figma</li>
            <li>Invision</li>
            <li>Marvel</li>
            <li>Pen &amp; Paper</li>
            <li>Sketch</li>
            <li>Webflow</li>
            <li>Zeplin</li>
          </ul>
        </div>
        <div className="skill-card">
          <figure className="card-image">
            <img src="" alt="" />
          </figure>
          <h3 className="title is-size-4 is-spaced">Designer</h3>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Things I enjoy designing:
          </p>
          <p>UX, UI, Web, Mobile, Apps, Logos</p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Design Tools:
          </p>
          <ul>
            <li>Balsamiq Mockups</li>
            <li>Figma</li>
            <li>Invision</li>
            <li>Marvel</li>
            <li>Pen &amp; Paper</li>
            <li>Sketch</li>
            <li>Webflow</li>
            <li>Zeplin</li>
          </ul>
        </div>
        <div className="skill-card">
          <figure className="card-image">
            <img src="" alt="" />
          </figure>
          <h3 className="title is-size-4 is-spaced">Designer</h3>
          <p>
            I value simple content structure, clean design patterns, and
            thoughtful interactions.
          </p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Things I enjoy designing:
          </p>
          <p>UX, UI, Web, Mobile, Apps, Logos</p>
          <p className="list-title has-text-primary has-text-weight-normal">
            Design Tools:
          </p>
          <ul>
            <li>Balsamiq Mockups</li>
            <li>Figma</li>
            <li>Invision</li>
            <li>Marvel</li>
            <li>Pen &amp; Paper</li>
            <li>Sketch</li>
            <li>Webflow</li>
            <li>Zeplin</li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
