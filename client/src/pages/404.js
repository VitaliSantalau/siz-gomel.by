import { Link } from "gatsby"
import React from "react"
import style from "../css/page404.module.css"

export default function Page404() {
  return (
    <div className={style.main}>
      <h1>Страница не найдена</h1>
      <p>Ooops!</p>
      <p>Эта страница была удалена или перемещена</p>
      <Link to="/" className={style.link}>Вернуться на главную</Link>
    </div>
  )
}