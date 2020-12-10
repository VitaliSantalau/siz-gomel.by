import React from "react";
import { Link } from "gatsby";

  import style from "../css/catalogNav.module.css";
import workShoesIcon from "../icons/foot.png";

export default function CatalogNav() {

  return (   
    <nav>
      <h2 className={style.wordCATALOG}>КАТАЛОГ</h2>  
      <div className={style.containerGroupSubgroup}>
        <Link to="/work-shoes/" className={style.group} activeClassName={style.activeGroup}>
          <img className="groupIcon" src={workShoesIcon} alt="work-shoes-icon" />
          <div className="groupText">Рабочая обувь</div>
        </Link>
        <div className="containerSubgroup">
          <Link to="/work-shoes-berts/" className={style.subgroup} activeClassName={style.activeSubGroup}>Берцы</Link>
          <Link to="/work-shoes-boots/" className={style.subgroup} activeClassName={style.activeSubGroup}>Ботинки</Link>
          <Link to="/work-shoes-low-boots/" className={style.subgroup} activeClassName={style.activeSubGroup}>Полуботинки</Link>
          <Link to="/work-shoes-high-boots/"className={style.subgroup} activeClassName={style.activeSubGroup}>Сапоги</Link>
          <Link to="/work-shoes-rubber-high-boots/" className={style.subgroup} activeClassName={style.activeSubGroup}>Резиновые сапоги</Link>
          <Link to="/work-shoes-slippers/" className={style.subgroup} activeClassName={style.activeSubGroup}>Тапочки</Link>
        </div>
      </div>
      <div className="containerGroupSubgroup">
        <div class="clothes group">
          <img className="groupIcon" src="./icons/clothes.png" alt=""/>
          <div class="groupText">Спецодежда</div>
        </div>
        <div class="containerSubgroup">
          <a className={style.subgroup} href="./pages/winterClothes.html">Зимняя одежда</a>
          <a className={style.subgroup} href="./pages/summerClothes.html">Летняя одежда</a>
          <a className={style.subgroup} href="./pages/waterproofClothes.html">Влагозащитная одежда</a>
          <a className={style.subgroup} href="./pages/acidClothes.html">Одежда от кислот</a>
          <a className={style.subgroup} href="./pages/weldingClothes.html">Одежда сварщика</a>
          <a className={style.subgroup} href="./pages/signalVest.html">Жилеты сигнальные</a>
        </div>
      </div>
      <div className="containerGroupSubgroup">
        <div class="siz group">
          <img class="groupIcon" src="./icons/siz.png" alt=""/>
          <div class="groupText">Средства защиты</div>
        </div>
        <div class="containerSubgroup">
          <a className={style.subgroup} href="./pages/eyeProtection.html">Защита глаз</a>
          <a className={style.subgroup} href="./pages/headProtection.html">Защита головы</a>
          <a className={style.subgroup} href="./pages/respiratoryProtection.html">Защита органов дыхания</a>
          <a className={style.subgroup} href="./pages/hearingProtection.html">Защита органов слуха</a>
          <a className={style.subgroup} href="./pages/heightProtection.html">Защита при высотных работах</a>
          <a className={style.subgroup} href="./pages/handProtection.html">Защита рук</a>
        </div>
      </div>
      <div class="containerGroupSubgroup">
        <div class="medicine group">
          <img class="groupIcon" src="./icons/medicine.png" alt=""/>
          <div class="groupText">Медицинские СИЗ</div>
        </div>
        <div class="containerSubgroup">
          <a className={style.subgroup} href="./pages/flap.html">Щитки</a>
          <a className={style.subgroup} href="./pages/shoeCover.html">Бахилы</a>
          <a className={style.subgroup} href="./pages/shoeCover.html">Маски</a>
        </div>
      </div>
    </nav>
  )
};
