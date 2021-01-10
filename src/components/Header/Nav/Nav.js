import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Menu } from "@chakra-ui/core"

export default () => {
    const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "main-menu" }) {
        name
        menuItems {
          nodes {
            label
            url
            parentId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

    return !!wpMenu && !!wpMenu.menuItems && !!wpMenu.menuItems.nodes ? (
            <Menu>
                <div className="page-navigation">
                    <nav className="menu">
                        <ul className="menu-container d-flex justify-content-between align-items-center">
                        {wpMenu.menuItems.nodes.map((menuItem, i) => {
                            if (menuItem.parentId) {
                                return null
                            }

                            const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

                            return (
                                <li className="menu-item">
                                    <Link key={i + menuItem.url} to={(path)}>
                                        {menuItem.label}
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>
                    </nav>
                </div>
            </Menu>
    ) : null
}

// allWpClient {
//     edges {
//         node {
//             title
//             clientPostType {
//                 clientImage {
//                     sourceUrl
//                     uri
//                 }
//             }
//         }
//     }
// }