import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import style from "../css/bestseller.module.css"


export default function Bestseller() {
  const data = useStaticQuery(graphql`
  {
    allBestsellerJson {
      edges {
        node {
          id
          name
          slug
          price
          image {
            childImageSharp {
              fluid(fit: COVER) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          alt
        }
      }
    }
  }
`)
  
  const listBestseller = data.allBestsellerJson.edges.map(edge => {
    const item = edge.node;
    return (
      <Link to={`/${item.slug}/`} className={style.productCard} key={item.id}>
        <div className={style.containerProductCardImage}>
          <Img className={style.productCardImage}
            fluid={item.image.childImageSharp.fluid}
            alt={item.alt}
          />
        </div>
        <div className={style.containerProductCardNamePrice}>
          <p className={style.productCardName}>{item.name}</p>
          <div className={style.containerPriceDetails}>
            <div className={style.containerPriceNds}>
              <div className={style.productCardPrice}>{item.price}</div>
              <div className={style.nds}>(без НДС)</div>
            </div>            
            <div className={style.details}>подробнее</div>
          </div>
        </div>
      </Link>
    )   
  })

  return (
    <div className={style.containerListBestseller}>
      {listBestseller}
    </div>
  );
}