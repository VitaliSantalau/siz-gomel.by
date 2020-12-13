import React from "react";
import { Link } from "gatsby";

import style from "../css/catalogNav.module.css";
import workShoesIcon from "../icons/foot.png";
import workClothesIcon from "../icons/clothes.png";
import siz from "../icons/siz.png";
import medical from "../icons/medical.png";

export default function CatalogNav() {


  return (   
    <nav className={style.nav}>
      <h2 className={style.wordCATALOG}>КАТАЛОГ</h2>  
      <div className={style.containerGroupSubgroup}>
        <Link to="/work-shoes/" className={style.group}>
          <img className={style.groupIcon} src={workShoesIcon} alt="work shoes icon" />
          <div className={style.groupText}>Рабочая обувь</div>
        </Link>
        <div className={style.containerSubgroup}>
          <Link to="/work-shoes-berts/" className={style.subgroup} activeClassName={style.activeSubGroup}>Берцы</Link>
          <Link to="/work-shoes-boots/" className={style.subgroup} activeClassName={style.activeSubGroup}>Ботинки</Link>
          <Link to="/work-shoes-low-boots/" className={style.subgroup} activeClassName={style.activeSubGroup}>Полуботинки</Link>
          <Link to="/work-shoes-high-boots/"className={style.subgroup} activeClassName={style.activeSubGroup}>Сапоги</Link>
          <Link to="/work-shoes-rubber-high-boots/" className={style.subgroup} activeClassName={style.activeSubGroup}>Резиновые сапоги</Link>
          <Link to="/work-shoes-slippers/" className={style.subgroup} activeClassName={style.activeSubGroup}>Тапочки</Link>
        </div>
      </div>
      <div className={style.containerGroupSubgroup}>
        <Link to="/work-clothes/" className={style.group} activeClassName={style.activeGroup}>
          <img className={style.groupIcon}  src={workClothesIcon} alt="work clothes icon"/>
          <div className={style.groupText}>Спецодежда</div>
        </Link>
        <div className={style.containerSubgroup}>
          <Link to="/work-clothes-winter-clothes" className={style.subgroup} activeClassName={style.activeSubGroup}>Зимняя одежда</Link>
          <Link to="/work-clothes-summer-clothes" className={style.subgroup} activeClassName={style.activeSubGroup}>Летняя одежда</Link>
          <Link to="/work-clothes-waterproof-clothes" className={style.subgroup} activeClassName={style.activeSubGroup}>Влагозащитная одежда</Link>
          <Link to="/work-clothes-acid-clothes" className={style.subgroup} activeClassName={style.activeSubGroup}>Одежда от кислот</Link>
          <Link to="/work-clothes-welding-clothes" className={style.subgroup} activeClassName={style.activeSubGroup}>Одежда сварщика</Link>
          <Link to="/work-clothes-signal-vest" className={style.subgroup} activeClassName={style.activeSubGroup}>Жилеты сигнальные</Link>
        </div>
      </div>
      <div className={style.containerGroupSubgroup}>
        <Link to="/personal-protective-equipment/" className={style.group} activeClassName={style.activeGroup}>
          <img className={style.groupIcon}  src={siz} alt="personal protective equipment icon"/>
          <div className={style.groupText}>Средства защиты</div>
        </Link>
        <div className={style.containerSubgroup}>
          <Link to="/personal-protective-equipment-eye-protection/" className={style.subgroup} activeClassName={style.activeSubGroup}>Защита глаз</Link>
          <Link to="/personal-protective-equipment-head-protection/" className={style.subgroup} activeClassName={style.activeSubGroup}>Защита головы</Link>
          <Link to="/personal-protective-equipment-respiratory-protection/" className={style.subgroup} activeClassName={style.activeSubGroup}>Защита органов дыхания</Link>
          <Link to="/personal-protective-equipment-hearing-protection/" className={style.subgroup} activeClassName={style.activeSubGroup}>Защита органов слуха</Link>
          <Link to="/personal-protective-equipment-height-protection/" className={style.subgroup} activeClassName={style.activeSubGroup}>Защита при высотных работах</Link>
          <Link to="/personal-protective-equipment-hand-protection/" className={style.subgroup} activeClassName={style.activeSubGroup}>Защита рук</Link>
        </div>
      </div>
      <div className={style.containerGroupSubgroup}>
        <Link to="/medical-protection/" className={style.group} activeClassName={style.activeGroup}>
          <img className={style.groupIcon} src={medical} alt="medical protection icon"/>
          <div className={style.groupText}>Медицинские СИЗ</div>
        </Link>
        <div className={style.containerSubgroup}>
          <Link to="/medical-protection-flaps/" className={style.subgroup} activeClassName={style.activeSubGroup}>Щитки</Link>
          <Link to="/medical-protection-shoe-covers/" className={style.subgroup} activeClassName={style.activeSubGroup}>Бахилы</Link>
          <Link to="/medical-protection-masks/" className={style.subgroup} activeClassName={style.activeSubGroup}>Маски</Link>
        </div>
      </div>
    </nav>
  )
};