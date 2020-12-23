import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import style from "../css/product.module.css"

import MainLayout from "../components/mainLayout"
import SEO from "../components/seo"
import CatalogNav from "../components/catalogNav"

export const query = graphql`
  query($slug: String!) {
    productJson(slug: { eq: $slug }) {
      name
      price
      image {
        publicURL
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alt
      description
    }
  }
`


const Product = ({ data }) => {
  const structuredData = {
    "@context" : "http://schema.org",
    "@type" : "Product",
    "name" : data.productJson.name,
    "image" : `http://gomel-siz.by${data.productJson.image.publicURL}`,
    "description" : data.productJson.description,
    "offers" : {
      "@type" : "Offer",
      "price" : data.productJson.price
    }
  }
  
  const product = data.productJson
  return (
    <MainLayout>
      <SEO title={product.name} description={`Подробная информация о товаре ${product.name}`} jsonLD={structuredData}/>
      <main>
        <CatalogNav />
        <section className={style.mainSection}>
        <div className={style.product}>
          <div className={style.containerImage}>
            <Img className={style.imageProduct}
              fluid={product.image.childImageSharp.fluid}
              alt={product.alt}
            />
          </div>
          <div className={style.descriptionProduct}>
            <h2 className={style.groupName}>{product.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: product.description }} className={style.text}/>
            <div className={style.priceNds}>
              <div className={style.price}>{product.price}</div>
              <div className={style.nds}>(без НДС)</div>
            </div>
          </div>
        </div>
        </section>
      </main>
    </MainLayout>
  )
}
export default Product;