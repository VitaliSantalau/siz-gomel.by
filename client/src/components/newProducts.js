import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import style from "../css/bestseller.module.css"


export default function NewProducts() {
  const data = useStaticQuery(graphql`
  {
    allNewProductsJson {
      edges {
        node {
          name
          price
          image {
            childImageSharp {
              fluid(fit: COVER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
  }
  `)

  
  const listNewProducts = data.allNewProductsJson.edges.map(edge => {
    const item = edge.node;
    return (
      <Link to={`/${item.slug}/`} className={style.subgroup} activeClassName={style.activeGroup}>
        <div className={style.containerSubGroupImage}>
          <Img className={style.subgroupImage}
            fluid={item.image.childImageSharp.fluid}
            alt={item.alt}
          />
        </div>
        <div className={style.containerSubGroupNamePrice}>
          <p className={style.subgroupName}>{item.name}</p>
          <div className={style.containerPriceDetails}>
            <div className={style.containerPriceNds}>
              <div className={style.subgroupPrice}>{item.price}</div>
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
      {listNewProducts}
    </div>
  );
}