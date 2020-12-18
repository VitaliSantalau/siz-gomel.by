import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

export default function SEO({ title, description }) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          keywords
          siteUrl
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
    
  return (
    <Helmet 
      htmlAttributes={{ lang: "ru" }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[ { name: "description", content: metaDescription },
              { name: "keywords", content: site.siteMetadata.keywords } 
            ]}
    />
  )

 /* SEO.defaultProps = {
    lang: "ru",
    meta: [],
    description: ``,
  }

  SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
  }*/
}