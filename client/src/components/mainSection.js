import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import style from "../css/mainSection.module.css"
import Bestseller from "./bestseller"
import NewProducts from "./newProducts"


export default function MainSection() {
  const data = useStaticQuery(graphql`
  {
    allGroupsJson {
      edges {
        node {
          id
          groupName
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
  }
  `)
  
  const listGroups = data.allGroupsJson.edges.map(edge => {
    const group = edge.node;
    return ( 
      <Link to={`/${group.slug}/`} className={style.group} key={group.id}>
        <div className={style.containerGroupImage}>
          <Img className={style.groupImage}
            fluid={group.image.childImageSharp.fluid}
            alt={group.alt}
          />
        </div>
        <h2 className={style.groupName}>{group.groupName}</h2>
      </Link>
    )
  })
  
  return (
    <div className={style.mainSection}>
      <h1>Рабочая обувь, спецодежда, средства индивидуальной защиты, в том числе и медицинские СИЗ</h1>
      <div className={style.listGroups}>
        {listGroups}
      </div>
      <section className={style.bestseller}>
        <h3>
          Хит продаж
        </h3>
        <Bestseller />
      </section>
      <section className={style.newProducts}>
        <h3>
          Новинки
        </h3>
        <NewProducts />
      </section>
      <section className={style.textMainPage}>
        <div>
          <p>Компания ООО “Глобо-Бел” предлагает широкий выбор спецодежды, спецобуви, средств защиты головы и рук, органов дыхания, падения с высоты.</p>
        </div>
        <div>
          <p><strong>Является импортером в РБ кожаной спецобуви. В наличии размерный ряд от 36 до 49 размера.</strong></p> 
        </div>
        <div>
          <p>Доставка осуществляется в течение 1-5 рабочих дней.</p>
        </div>
        <div>
          <p><strong>Доставка по городу Гомелю осуществляется бесплатно при заказе от 300 рублей.</strong></p>
        </div>
        <div>
          <h3>Способы оплаты товара</h3>
          <p> - безналичный расчет</p>
        </div>
      </section>
    </div>
  )
  }