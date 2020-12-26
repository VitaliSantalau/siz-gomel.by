import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

import style from "../css/catalogMobile.module.css"

import MainLayout from "../components/mainLayout"
import SEO from "../components/seo"


export default function CatalogMobile() {
  const data = useStaticQuery(graphql`
    {
      workShoesIcon: file(relativePath: {eq: "images/footWhite.png"}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      workClothesIcon: file(relativePath: {eq: "images/clothesWhite.png"}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      siz: file(relativePath: {eq: "images/sizWhite.png"}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      medical: file(relativePath: {eq: "images/medicalWhite.png"}) {
        childImageSharp {
          fluid(fit: COVER) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <MainLayout>
      <SEO title="Каталог" description="Страница каталога для мобильной версии"/>
      <main>
        <nav className={style.nav}>
          <h2 className={style.wordCATALOG}>
            <Link to="/contacts/">КОНТАКТЫ</Link>
          </h2>  
          <h2 className={style.wordCATALOG}>КАТАЛОГ</h2>  
          <div className={style.containerGroupSubgroup}>
            <Link to="/work-shoes/" className={style.group}>
              <Img className={style.groupIcon}
                fluid={data.workShoesIcon.childImageSharp.fluid}
                alt="work shoes icon"
              />
              <div className={style.groupText}>Рабочая обувь</div>
            </Link>
            <div className={style.containerSubgroup}>
              <Link to="/work-shoes-berts/" className={style.subgroup} activeClassName={style.activeSubGroup}>Берцы</Link>
              <Link to="/work-shoes-boots/" className={style.subgroup} activeClassName={style.activeSubGroup}>Ботинки</Link>
              <Link to="/work-shoes-lowboots/" className={style.subgroup} activeClassName={style.activeSubGroup}>Полуботинки</Link>
              <Link to="/work-shoes-highboots/"className={style.subgroup} activeClassName={style.activeSubGroup}>Сапоги</Link>
              <Link to="/work-shoes-rubberboots/" className={style.subgroup} activeClassName={style.activeSubGroup}>Резиновые сапоги</Link>
              <Link to="/work-shoes-slippers/" className={style.subgroup} activeClassName={style.activeSubGroup}>Тапочки</Link>
            </div>
          </div>
          <div className={style.containerGroupSubgroup}>
            <Link to="/work-clothes/" className={style.group} activeClassName={style.activeGroup}>
              <Img className={style.groupIcon}
                fluid={data.workClothesIcon.childImageSharp.fluid}
                alt="work clothes icon"
              />      
              <div className={style.groupText}>Спецодежда</div>
            </Link>
        <div className={style.containerSubgroup}>
          <Link to="/work-clothes-winter/" className={style.subgroup} activeClassName={style.activeSubGroup}>Зимняя одежда</Link>
          <Link to="/work-clothes-summer/" className={style.subgroup} activeClassName={style.activeSubGroup}>Летняя одежда</Link>
          <Link to="/work-clothes-waterproof/" className={style.subgroup} activeClassName={style.activeSubGroup}>Влагозащитная одежда</Link>
          <Link to="/work-clothes-acidproof/" className={style.subgroup} activeClassName={style.activeSubGroup}>Одежда от кислот</Link>
          <Link to="/work-clothes-welder/" className={style.subgroup} activeClassName={style.activeSubGroup}>Одежда сварщика</Link>
          <Link to="/work-clothes-vests/" className={style.subgroup} activeClassName={style.activeSubGroup}>Жилеты сигнальные</Link>
        </div>
      </div>
      <div className={style.containerGroupSubgroup}>
        <Link to="/personal-protective-equipment/" className={style.group} activeClassName={style.activeGroup}>
          <Img className={style.groupIcon}
            fluid={data.siz.childImageSharp.fluid}
            alt="personal protective equipment icon"
          />
          <div className={style.groupText}>Средства защиты</div>
        </Link>
        <div className={style.containerSubgroup}>
          <Link to="/personal-protective-equipment-eye-protection/" className={style.subgroup} activeClassName={style.activeSubGroup}>Защита глаз</Link>
          <Link to="/personal-protective-equipment-head-protection/" className={style.subgroup} activeClassName={style.activeSubGroup}>Защита головы</Link>
          <Link to="/personal-protective-equipment-respiratory-protection/" className={style.subgroup} activeClassName={style.activeSubGroup}>Защита органов дыхания</Link>
          <Link to="/personal-protective-equipment-hearing-protection/" className={style.subgroup} activeClassName={style.activeSubGroup}>Защита органов слуха</Link>
          <Link to="/personal-protective-equipment-height-work-protection/" className={style.subgroup} activeClassName={style.activeSubGroup}>Защита при высотных работах</Link>
          <Link to="/personal-protective-equipment-hand-protection/" className={style.subgroup} activeClassName={style.activeSubGroup}>Защита рук</Link>
        </div>
      </div>
      <div className={style.containerGroupSubgroup}>
        <Link to="/medical-protection/" className={style.group} activeClassName={style.activeGroup}>
          <Img className={style.groupIcon}
            fluid={data.medical.childImageSharp.fluid}
            alt="medical protection icon"
          />
          <div className={style.groupText}>Медицинские СИЗ</div>
        </Link>
        <div className={style.containerSubgroup}>
          <Link to="/medical-protection-shields/" className={style.subgroup} activeClassName={style.activeSubGroup}>Щитки</Link>
          <Link to="/medical-protection-shoe-covers/" className={style.subgroup} activeClassName={style.activeSubGroup}>Бахилы</Link>
          <Link to="/medical-protection-masks/" className={style.subgroup} activeClassName={style.activeSubGroup}>Маски</Link>
        </div>
      </div>
          <h2 className={style.wordCATALOG}>
            <Link to="/info/">ИНФОРМАЦИЯ</Link>
          </h2>
        </nav>
      </main>
    </MainLayout>
  )
};