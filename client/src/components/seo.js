import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

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
      
    >   
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NHCJJK3');
        `}
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