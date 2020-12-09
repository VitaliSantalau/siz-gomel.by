import React from "react";
import { Link } from "gatsby";

import style from "../css/pageNav.module.css";

export default function PageNav() {
  return (
    <nav>
      <Link to="/" activeClassName={style.active}>КАТАЛОГ</Link>
      <Link to="/about/" activeClassName={style.active}>О КОМПАНИИ</Link>
      <Link to="/delivery/" activeClassName={style.active}>ОПЛАТА И ДОСТАВКА</Link>
    </nav>
  )
};
