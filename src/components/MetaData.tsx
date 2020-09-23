import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { MetaDataQuery } from 'types/graphql-types'

const WebFonts = () => (
  <>
    <script type='application/javascript'>
      {`
        {
          (function(d) {
            var config = {
              kitId: 'vac6hkl',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"""")+"" wf-inactive"";},config.scriptTimeout),tk=d.createElement(""script""),f=false,s=d.getElementsByTagName(""script"")[0],a;h.className+="" wf-loading"";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f%7C%7Ca&&a!=""complete""&&a!=""loaded"")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);
        }
    `}
    </script>
    <link rel="stylesheet" href="https://use.typekit.net/pey6zyl.css" />
    <link rel="stylesheet" href="https://use.typekit.net/vac6hkl.css" />
    <link rel="stylesheet" href="https://use.typekit.net/ajn0goi.css" />
    <link rel="stylesheet" href="https://use.typekit.net/bff0wql.css" />
    <link rel="stylesheet" href="https://use.typekit.net/bwj6ctc.css" />
    <link rel="stylesheet" href="https://use.typekit.net/nlu4xtp.css" />
  </>
)

export const MetaData: React.FC = () => (
  <StaticQuery
    query={query}
    render={(data: MetaDataQuery) => {
      if (!data.site?.siteMetadata) {
        return <></>
      }
      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title || ''}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description || '' }
            ]}
          >
            <WebFonts />
          </Helmet>
        </>
      )

    }}
  />
)


const query = graphql`
query MetaData {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`
