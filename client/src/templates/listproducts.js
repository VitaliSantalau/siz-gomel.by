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
      }
    }
  }
`

const Listproducts = ({ data }) => {
  const listproducts = data.productsJson.listproducts.map(item => {
    return (
      <Link to={`/${item.slug}/`} className={style.group} activeClassName={style.activeGroup}>
        <div className={style.containerGroupImage}>
          <Img className={style.groupImage}
            fluid={item.image.childImageSharp.fluid}
            alt={item.alt}
          />
        </div>
        <h2 className={style.groupName}>{item.name}</h2>
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