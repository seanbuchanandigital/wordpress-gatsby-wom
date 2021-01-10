import React from "react"
import {Link, graphql, useStaticQuery} from "gatsby"

const Logo = () => {

    const { allWpPage } = useStaticQuery(graphql`
    {
      allWpPage(filter: {title: {eq: "Theme Options"}}) {
        nodes {
          id
          themeOptions {
            themeLogo {
              mediaItemUrl
            }
          }
        }
      }
    }
  `)

    return !!allWpPage && !!allWpPage.nodes ? (
        <div className="branding">
            <div className="branding-logo">
                <Link to="/">
                    <img src={allWpPage.nodes[0].themeOptions.themeLogo.mediaItemUrl} alt="branding-logo"></img>
                </Link>
            </div>
        </div>
    ) : null
}

export default Logo