import { Link } from "gatsby"
import React from "react"
import style from "../css/page404.module.css"
import SEO from "../components/seo"

export default function Page404() {
  return (
    <div className={style.main}>
      <SEO 
        title="Ошибка" 
        description="page 404"
        pathname="/404"
      />
      <h1>Страница не найдена</h1>
      <p>Ooops!</p>
      <p>Эта страница была удалена или перемещена</p>
      <Link to="/" className={style.link}>Вернуться на главную</Link>
    </div>
  )
}