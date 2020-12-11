import React from "react";
import { Link } from "gatsby";
import style from "../css/mainSection.module.css"; 
import workShoesImage from "../images/Бахилы.png"

export default function MainSection() {

  return (   
    <section className={style.mainSection}>
      <h1> РАБОЧАЯ ОБУВЬ, СПЕЦОДЕЖДА, СРЕДСТВА ИНДИВИДУАЛЬНОЙ ЗАЩИТЫ, В ТОМ ЧИСЛЕ И МЕДИЦИНСКИЕ СИЗ</h1>
      <div className={style.listGroup}>
      <Link to="/work-shoes/" className={style.group} activeClassName={style.activeGroup}>
        <div className={style.containerGroupImage}>
          <img className={style.groupImage} src={workShoesImage} alt="work shoes image" />
        </div>
        <h2 className={style.groupName}>Рабочая обувь</h2>
      </Link>
      <Link to="/work-shoes/" className={style.group} activeClassName={style.activeGroup}>
        <div className={style.containerGroupImage}>
          <img className={style.groupImage} src={workShoesImage} alt="work shoes image" />
        </div>
        <h2 className={style.groupName}>Рабочая обувь</h2>
      </Link>
      <Link to="/work-shoes/" className={style.group} activeClassName={style.activeGroup}>
        <div className={style.containerGroupImage}>
          <img className={style.groupImage} src={workShoesImage} alt="work shoes image" />
        </div>
        <h2 className={style.groupName}>Рабочая обувь</h2>
      </Link>
      <Link to="/work-shoes/" className={style.group} activeClassName={style.activeGroup}>
        <div className={style.containerGroupImage}>
          <img className={style.groupImage} src={workShoesImage} alt="work shoes image" />
        </div>
        <h2 className={style.groupName}>Рабочая обувь</h2>
      </Link>
      </div>
    </section>
  )
};