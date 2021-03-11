import React from "react";

import style from "../css/footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={style.contacts}>
        <div className={style.addresses}>
          <div className={style.address}>
            246050, г.Гомель, ул.Гагарина, 57/8, к.6
          </div>
          <a href="mailto:gomel-siz@mail.ru" className={style.emailAddress}>
            gomel-siz@mail.ru
          </a>
        </div>
        <div className={style.timeTable}>
          <div>Пн-Пт: 09:00 - 18:00 </div>
          <div>Сб-Вс: выходной</div>
        </div>
        <div className={style.phones}>
          <div className={style.phone}>+375 (29) 113-13-24</div>
          <div className={style.phone}>+375 (29) 657-69-78</div>
          <div className={style.phone}>+375 (29) 577-46-40</div>    
        </div>
      </div> 
      <section>
        <div className={style.nameGloboBel}>&#169; Глобо-Бел, УНП 491338788</div>  
        <div>Информационный ресурс зарегистрирован в государственном реестре РБ №168247 от 12.11.2020</div>
      </section>
    </footer>
  )
};