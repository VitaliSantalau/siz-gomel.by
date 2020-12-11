import React from 'react';
import MainLayout from "../components/mainLayout";
import CatalogNav from '../components/catalogNav';
import MainSection from '../components/mainSection';


export default function indexPage() {
  
  return (
    <MainLayout>
      <main>
        <CatalogNav />
        <MainSection />
      </main>
    </MainLayout>
  )
};