import React from "react";
import { Link } from "gatsby";

import style from "../css/header.module.css";

export default function Header() {
  return (
    <header>
      <div className={style.firstLevel}>
        <Link to="/" className={style.logo}>
          <img className={style.iconLogo} src={require("../images/globe.png")} alt="icon of the logo it is a globe" />
          <div className={style.textLogo}>
            <div className={style.siteName}>
              <div>gomel</div>
              <div>-</div>
              <div>siz</div> 
              <div>.</div>
              <div>by</div> 
            </div>
            <div className={style.slogan}>
              <div>ПРОДАЖА</div>
              <div>РАБОЧЕЙ</div>
              <div>ОБУВИ,</div>
              <div>СПЕЦОДЕЖДЫ</div>
              <div>И</div>
              <div>СИЗ</div> 
            </div>
          </div>
        </Link>
        <div className={style.contacts}>
          <div className={style.addresses}>
            <div className={style.address}>
              246050, г.Гомель, ул.Гагарина, 57/8, к.6
            </div>
            <a href="mailto:globo_bel@mail.ru" className={style.emailAddress}>
              globo_bel@mail.ru
            </a>
          </div>
          <div className={style.timeTable}>
            <div>Пн-Пт: 09:00 - 18:00 </div>
            <div>Сб-Вс: выходной</div>
          </div>
          <div className={style.phones}>
            <a className={style.phone} href="tel:375291131324">+375 (29) 113-13-24</a>
            <a className={style.phone} href="tel:375296576978">+375 (29) 657-69-78</a>
            <a className={style.phone} href="tel:375295774640">+375 (29) 577-46-40</a>    
          </div>
        </div>
      </div>
      <nav className={style.secondLevel}>
        <Link to="/" activeClassName={style.active}>КАТАЛОГ</Link>
        <Link to="/about/" activeClassName={style.active}>О КОМПАНИИ</Link>
        <Link to="/delivery/" activeClassName={style.active}>ОПЛАТА И ДОСТАВКА</Link>
      </nav>
    </header>
  )
};