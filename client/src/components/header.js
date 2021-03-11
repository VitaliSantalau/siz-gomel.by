import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "../css/header.module.css";
import PageNav from "./pageNav";


export default function Header() {
  const data = useStaticQuery(graphql`
  {
    file(relativePath: {eq: "images/globe.png"}) {
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
      <div className={style.firstLevel}>
        <Link to="/" className={style.logo}>
          <Img className={style.iconLogo}
            fluid={data.file.childImageSharp.fluid}
            alt="this is the logo it is a globe"
          />
          <div className={style.textLogo}>
            <div className={style.siteName}>
              <div>GOMEL</div>
              <div>-</div>
              <div>SIZ</div> 
              <div>.</div>
              <div>BY</div> 
            </div>
          </div>
        </Link>
        <div className={style.contacts}>
          <div className={style.addresses}>
            <div className={style.address}>
              246050, г.Гомель, ул.Гагарина, 57/8, к.6
            </div>
            <a href="mailto:gomel-siz@mail.ru" className={style.emailAddress}>
              gomel-siz@mail.ru
            </a>
          </div>
          <div className={style.timeTable}>
            <div>Пн-Пт: 09:00 - 18:00 </div>
            <div>Сб-Вс: выходной</div>
          </div>
          <div className={style.phones}>
            <a className={style.phone} href="tel:375291131324">+375 (29) 113-13-24</a>
            <a className={style.phone} href="tel:375296576978">+375 (29) 657-69-78</a>
            <a className={style.phone} href="tel:375295774640">+375 (29) 577-46-40</a>    
          </div>
        </div>
      </div>
      <PageNav />
    </header>
  )
};