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
          groupName
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
  }
  `)
  
  const listGroups = data.allGroupsJson.edges.map(edge => {
    const group = edge.node;
    return ( 
      <Link to={`/${group.slug}/`} className={style.group} activeClassName={style.activeGroup}>
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
      <section className={style.hit}>
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
          <p><strong>Компания ООО “Глобо-Бел” предлагает широкий выбор спецодежды, спецобуви, средств защиты головы и рук, органов дыхания, падения с высоты.</strong></p>
        </div>
        <div>
          <p>Вся продукция исключительно высокого качества, прошла сертификационные испытания и имеет максимально низкую цену. Мы даем гарантию на продукцию, которую реализовываем нашим клиентам. Производственные предприятия, строительство, сфера общественного питания, медицинские учреждения, охранные структуры и многие другие носят спецодежду, спецобувь и пользуются средствами индивидуальной защиты приобретенные в ООО «Глобо-Бел».</p> 
          <p>Нам доверяет более 1000 организаций.</p>
        </div>
        <div>
          <p>Вне зависимости от объёма заказа, высококвалифицированные менеджеры находят индивидуальный подход к каждому клиенту и помогают правильно подобрать специальную одежду и обувь в соответствии с необходимыми производственными условиями  и с учетом пожеланий заказчика.</p>
        </div>
        <div>
          <p>Сотрудники нашей компании стараются сделать всё возможное, чтобы клиенты получали заказанные товары как можно быстрее. Поэтому после оплаты заказа мы в максимально короткие сроки комплектуем и упаковываем ваш заказ.</p>
        <p>Доставка осуществляется <strong>в течение 1-5 рабочих дней с момента 100% оплаты за товар</strong> в зависимости от удалённости вашего населённого пункта. Менеджеры организуют доставку приобретенной Вами продукции в любой регион Республики Беларусь. Доставка по городу Гомель осуществляется бесплатно.</p>
        </div>
        <div>
          <h3>Способы оплаты товара</h3>
          <p> - по безналичному расчету</p>
        </div>
      </section>
    </div>
  )
  }