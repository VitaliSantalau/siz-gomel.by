import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import style from "../css/newProduct.module.css"


export default function NewProducts() {
  const data = useStaticQuery(graphql`
  {
    allNewProductsJson {
      edges {
        node {
          id
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
    <div className={style.containerListNewProduct}>
      {listNewProducts}
    </div>
  );
}