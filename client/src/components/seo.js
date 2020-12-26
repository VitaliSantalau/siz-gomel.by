import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ title, description, jsonLD, pathname }) {
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
  const canonical = pathname;
    
  return (
    <Helmet 
      htmlAttributes={{ lang: "ru" }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[ { name: "description", content: metaDescription },
              { name: "keywords", content: site.siteMetadata.keywords },
              { name: "yandex-verification", content: "e236b1bdbd40199f" },
              { name: "robots", content: "index, follow" }
            ]}
      link={[
        {
          rel: "canonical", 
          href: canonical,
        }
      ]}
    >
      <script type="application/ld+json">
        {JSON.stringify(jsonLD)}
      </script>
    </Helmet> 
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