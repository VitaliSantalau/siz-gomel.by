import React from 'react'
import { Helmet } from "react-helmet"
import MainLayout from "../components/mainLayout"
import SEO from "../components/seo"
import CatalogNav from '../components/catalogNav'
import MainSection from '../components/mainSection'


export default function indexPage() {
  
  return (
    <MainLayout>
      <SEO title="Рабочая обувь, спецодежда, средства индивидуальной защиты, в том числе медицинские СИЗ"/>
      <Helmet>
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://www.spookytech.com",
          "name": "Spooky technologies",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+5-601-785-8543",
            "contactType": "Customer Support"
          }
        }
        `}
        </script>
      </Helmet>
      <main>
        <CatalogNav />
        <MainSection />
      </main>
    </MainLayout>
  )
};