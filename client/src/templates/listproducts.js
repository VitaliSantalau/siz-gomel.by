import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import style from "../css/mainSection.module.css"
import MainLayout from "../components/mainLayout"
import CatalogNav from "../components/catalogNav"


export const query = graphql`
  query($slug: String!) {
    productsJson(slug: { eq: $slug }) {
      subgroupName
      listproducts {
        name
        slug
        image {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
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
      <Link to={`/${item.slug}/`} className={style.subgroup} activeClassName={style.activeGroup}>
        <div className={style.containerSubGroupImage}>
          <Img className={style.subgroupImage}
            fluid={item.image.childImageSharp.fluid}
            alt={item.alt}
          />
        </div>
        <div className={style.containerSubGroupNamePrice}>
          <h2 className={style.subgroupName}>{item.name}</h2>
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
    <MainLayout>
      <main>
        <CatalogNav />
        <div className={style.mainSection}>
          <h1>{data.productsJson.subgroupName}</h1>
          <div className={style.listGroups}>
            {listproducts}
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default Listproducts;