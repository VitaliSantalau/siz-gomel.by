import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import style from "../css/listproducts.module.css"
import MainLayout from "../components/mainLayout"
import SEO from "../components/seo"
import CatalogNav from "../components/catalogNav"


export const query = graphql`
  query($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      subgroupName
      slug
      listproducts {
        name
        slug
        image {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        alt
        price
      }
    }
  }
`

const Listproducts = ({ data }) => {
  const listproducts = data.productsJson.listproducts.map(item => {
    return (
      <Link to={`/${item.slug}/`} className={style.productCard} key={item.slug}>
        <div className={style.containerProductCardImage}>
          <Img className={style.productCardImage}
            fluid={item.image.childImageSharp.fluid}
            alt={item.alt}
          />
        </div>
        <div className={style.containerProductCardNamePrice}>
          <h2 className={style.productCardName}>{item.name}</h2>
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
    <MainLayout>
      <SEO 
        title={data.productsJson.subgroupName} 
        description={`Список товаров для подраздела ${data.productsJson.subgroupName}`}
        pathname={`http://gomel-siz.by/${data.productsJson.slug}`}
      />
      <main>
        <CatalogNav />
        <div className={style.mainSection}>
          <h1>{data.productsJson.subgroupName}</h1>
          <div className={style.listProducts}>
            {listproducts}
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default Listproducts;