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
        image {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Listproducts = ({ data }) => {
/*  const list = data.productsJson.listproducts.map(item => {
    return (
      <Link to={`/${item.slug}/`} className={style.group} activeClassName={style.activeGroup}>
        
        <h2 className={style.groupName}>{item.name}</h2>
      </Link>
    )   
  })*/

  return (
    <MainLayout>
      <main>
        <CatalogNav />
        <div className={style.mainSection}>
          <h1>{data.productsJson.subgroupName}</h1>
          <div className={style.listGroups}>
            
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default Listproducts;