import React from "react";
import { Link } from "gatsby";

import style from "../css/pageNav.module.css";

/*<Link to="/info/" activeClassName={style.active}>ИНФОРМАЦИЯ</Link> */

export default function PageNav() {
  return (
    <nav className={style.nav}>
      <Link to="/" activeClassName={style.active}>ГЛАВНАЯ</Link>
      <Link to="/contacts/" activeClassName={style.active}>КОНТАКТЫ</Link>
    </nav>
  )
};
