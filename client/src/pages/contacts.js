import React from 'react'
import MainLayout from "../components/mainLayout"
import SEO from "../components/seo"
import CatalogNav from '../components/catalogNav'
import MainSection from '../components/mainSection'

export default function indexPage() {
  
    return (
      
      <MainLayout>
        <SEO title="Контакты" description="контакты и реквизиты компании ООО Глобо-бел"/>
        <main>
          <CatalogNav />
          <MainSection />
          246050, г.Гомель, ул.Гагарина, 57/8, к.6
globo_bel@mail.ru
Пн-Пт: 09:00 - 18:00
Сб-Вс: выходной
+375 (29) 113-13-24
+375 (29) 657-69-78
+375 (29) 577-46-40
Общество с ограниченной ответственностью «Г лобо-Бел»
246050, г. Гомель, ул. Гагарина, 57/8, к.6
УНП 491338788 ОКПО 503700213000 р/с BY14BLBB30120491338788001001 в Дирекции ОАО «Белинвестбанк» по Гомельской области,
246050, г. Гомель, ул. Советская,7 BLBBBY2X e-mail: globo bel@mail.ru директор Астапенко Н.В. на основании Устава

        </main>
      </MainLayout>
    )
  };