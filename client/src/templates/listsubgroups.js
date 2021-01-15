import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import style from "../css/listsubgroups.module.css"
import MainLayout from "../components/mainLayout"
import SEO from "../components/seo"
import CatalogNav from "../components/catalogNav"


export const query = graphql`
  query($slug: String!) {
    groupsJson(slug: { eq: $slug }) {
      groupName
      slug
      subgroup {
        subgroupName
        slug
        image {
          childImageSharp {
            fluid(fit: COVER) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        alt
      }
    }
  }
`

const Listsubgroups = ({ data }) => {
  const listsubgroups = data.groupsJson.subgroup.map(item => {
    return (
      <Link to={`/${item.slug}/`} className={style.subGroup} key={item.slug}>
        <div className={style.containerSubGroupImage}>
          <Img className={style.subGroupImage}
            fluid={item.image.childImageSharp.fluid}
            alt={item.alt}
          />
        </div>
        <h2 className={style.subGroupName}>{item.subgroupName}</h2>
      </Link>
    )   
  })

  return (
    <MainLayout>
      <SEO 
        title={data.groupsJson.groupName} 
        description={`Список подгрупп для группы ${data.groupsJson.groupName}`}
      />
      <main>
        <CatalogNav />
        <div className={style.mainSection}>
          <h1>{data.groupsJson.groupName}</h1>
          <div className={style.listSubGroups}>
            {listsubgroups}
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default Listsubgroups;