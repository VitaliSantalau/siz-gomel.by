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
      id
      slug
      name
      price
      image {
        publicURL
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      alt
      description
    }
  }
`

const Product = ({ data }) => {
  const product = data.productJson
  
  const structuredData = {
    "@context" : "http://schema.org",
    "@type" : "Product",
    "sku" : product.id,
    "name" : product.name,
    "image" : `http://gomel-siz.by${product.image.publicURL}`,
    "description" : product.description,
    "offers" : {
      "@type" : "Offer",
      "availability": "https://schema.org/InStock",
      "url" : `http://gomel-siz.by/${product.slug}`,
      "price" : product.price,
      "priceCurrency": "BYN",
    }
  }
  
  
  return (
    <MainLayout>
      <SEO 
        title={product.name} 
        description={`Подробная информация о товаре ${product.name}`} 
        jsonLD={structuredData}
        pathname={`/${product.slug}`}
      />
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
          </div>
        </div>
        </section>
      </main>
    </MainLayout>
  )
}
export default Product;