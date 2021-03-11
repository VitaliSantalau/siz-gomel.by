import React from 'react'
import MainLayout from "../components/mainLayout"
import SEO from "../components/seo"

import style from "../css/contacts.module.css"

export default function Contacts() {
  
  /*
  <p>ОКПО 503700213000</p>
  <p>р/с BY14BLBB30120491338788001001 в Дирекции ОАО «Белинвестбанк» по Гомельской области, 246050, г. Гомель, ул. Советская,7 BLBBBY2X</p>
  */

    return (
      <MainLayout>
        <SEO 
          title="Контакты" 
          description="контакты и реквизиты общества с ограниченной ответственностью Глобо-бел"
          pathname="/contacts" 
        />
        <main>  
          <div className={style.wrapper}>
            <h1>Контакты и реквизиты</h1>
            <h3 className={style.name}>ООО "Глобо-бел"</h3>
            <p className={style.adress}><strong>адрес:</strong>246050, г.Гомель, ул.Гагарина, 57/8, к.6</p>
            <p className={style.email}><strong>email:</strong>gomel-siz@mail.ru</p>
            <div className={style.timetable}>
              <strong>время работы:</strong>
              <p>Пн-Пт: 09:00 - 18:00</p>
              <p>Сб-Вс: выходной</p>
            </div>
            <div className={style.phones}>
              <strong>контактные телефоны:</strong>
              <a href="tel:375291131324">+375 (29) 113-13-24</a>
              <a href="tel:375296576978">+375 (29) 657-69-78</a>
              <a href="tel:375295774640">+375 (29) 577-46-40</a>
              <a href="tel:375291274793">+375 (29) 127-47-93</a>
            </div>
            <div className={style.bank}>
              <strong>реквизиты:</strong>
              <p>УНП 491338788</p>
            </div>
          </div>
        </main>
      </MainLayout>
    )
  };