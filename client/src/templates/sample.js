import React from "react";

import MainLayout from "../components/mainLayout";


const Sample = ({ pageContext }) => {

  return (
    <MainLayout>
      <main>
      <p>{pageContext.name}</p>
      <p>{pageContext.price}</p>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </main>
    </MainLayout>
  )  
};

export default Sample;