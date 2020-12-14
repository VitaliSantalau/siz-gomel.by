import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import style from "../css/mainSection.module.css"

import MainLayout from "../components/mainLayout"
import CatalogNav from "../components/catalogNav"

export const query = graphql`
  query($slug: String!) {
    productJson(slug: { eq: $slug }) {
      name
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
`

const Product = ({ data }) => {
  const product = data.productJson
  return (
    <MainLayout>
      <main>
      <CatalogNav />
        <div className={style.containerGroupImage}>
          <Img className={style.groupImage}
            fluid={product.image.childImageSharp.fluid}
            alt={product.alt}
          />
        </div>
        <h2 className={style.groupName}>{product.name}</h2>
      </main>
    </MainLayout>
  )
}

export default Product;