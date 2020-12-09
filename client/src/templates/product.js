import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
{
    allProductsJson {
      edges {
        node {
          title
          slug
          description
          price
        }
      }
    }
  }
`

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>




export default ComponentName;