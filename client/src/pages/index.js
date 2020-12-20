import React from 'react'
import MainLayout from "../components/mainLayout"
import SEO from "../components/seo"
import CatalogNav from '../components/catalogNav'
import MainSection from '../components/mainSection'


export default function indexPage() {
  
  return (
    
    <MainLayout>
      <SEO title="Рабочая обувь, спецодежда, средства индивидуальной защиты, в том числе медицинские СИЗ"/>
      <main>
        <CatalogNav />
        <MainSection />
      </main>
    </MainLayout>
  )
};