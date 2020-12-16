import React from "react"
import { Link } from "gatsby"

import style from "../css/headerMobile.module.css"
import home from "../icons/home.png"
import phone from "../icons/phone.png"
import menu from "../icons/menu.png"

export default function HeaderMobile() {
  return (
    <header className={style.header}>
      <Link to="/">
        <div className={style.siteName}>
          <div>gomel</div>
          <div>-</div>
          <div>siz</div> 
          <div>.</div>
          <div>by</div> 
        </div>
      </Link>
      <div className={style.icons}>
        <Link to="/">
          <img className={style.navIcon} src={home} alt="home icon" />
        </Link>
        <a href="tel:375291131324">
          <img className={style.navIcon} src={phone} alt="phone icon" />
        </a>
        <Link to="/catalogMobile/">
          <img className={style.navIcon} src={menu} alt="menu icon" />
        </Link>
      </div>

    </header>
  )
}