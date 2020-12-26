import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import style from "../css/headerMobile.module.css"

export default function HeaderMobile() {
  const data = useStaticQuery(graphql`
  {
    home: file(relativePath: {eq: "images/home.png"}) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    phone: file(relativePath: {eq: "images/phone.png"}) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    menu: file(relativePath: {eq: "images/menu.png"}) {
      childImageSharp {
        fluid(fit: COVER) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)

  return (
    <header className={style.header}>
      <Link to="/">
        <div className={style.siteName}>
          <div>GOMEL</div>
          <div>-</div>
          <div>SIZ</div> 
          <div>.</div>
          <div>BY</div> 
        </div>
      </Link>
      <div className={style.icons}>
        <Link to="/">
          <Img className={style.navIcon}
            fluid={data.home.childImageSharp.fluid}
            alt="home icon"
          />
        </Link>
        <a href="tel:375291131324">
          <Img className={style.navIcon}
            fluid={data.phone.childImageSharp.fluid}
            alt="phone icon"
          />
        </a>
        <Link to="/catalogMobile/">
          <Img className={style.navIcon}
            fluid={data.menu.childImageSharp.fluid}
            alt="menu icon"
          />
        </Link>
      </div>
    </header>
  )
}