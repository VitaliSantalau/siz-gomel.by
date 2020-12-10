import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import MainLayout from "../components/mainLayout"

export const query = graphql`
  query($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      title
      description
      price
      image {
        childImageSharp {
          fluid(maxWidth: 800, quality: 70) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Product = ({ data }) => {
  const product = data.productsJson;
  return (
    <MainLayout>
      <main>
        {product.title}
        {product.price}
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
        <div style={{width: "30%", height: "20%"}}>
        <Img
        fluid={product.image.childImageSharp.fluid}
        alt={product.title}
      />
        </div>
      
      
        
      </main>
    </MainLayout>
  )
}

export default Product;