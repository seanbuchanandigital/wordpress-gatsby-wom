import React from "react"
import Layout from "../../../wordpress-gatsby/src/components/Layout.js"
import "../assets/css/style.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {graphql, Link, useStaticQuery, withPrefix} from "gatsby"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
// import { faStar } from "@fortawesome/free-solid-svg-icons"

import project1 from "../assets/images/projects/cover/lj-hooker-cover.jpg"
import project2 from "../assets/images/projects/cover/rixx-cover.jpg"
import project3 from "../assets/images/projects/cover/salon-cover.jpg"
import project4 from "../assets/images/projects/cover/swan-cover.jpg"

// import blog1 from "../assets/images/blogs/blog-1.jpg"
// import blog2 from "../assets/images/blogs/blog-2.jpg"
// import blog3 from "../assets/images/blogs/blog-3.jpg"

const parse = require('html-react-parser');

export default function Home() {

  const data = useStaticQuery(graphql`
    {
      allWpMenuItem(filter: {label: {eq: "Services"}}) {
        edges {
          node {
            label
            childItems {
              nodes {
                label
                childItems {
                  nodes {
                    label
                  }
                }
              }
            }
          }
        }
      }
      allWpPage(filter: {title: {eq: "Home"}}) {
        nodes {
          home {
            heroHeading
            heroText
            section1Heading
            section1Link {
              title
            }
          }
        }
      }
    }
  `)

  return (
      <Layout>
        <section className="hero-banner container-fluid bg-primary">
          <div className="row">
            <div className="col">
              <div className="col-inner">
                <div className="wrapper">
                  <div className="hero-content position-relative">
                    <h2 className="display-3 pb-5 text-center text-white">
                      {data.allWpPage.nodes[0].home.heroHeading}
                    </h2>
                    {parse(`${data.allWpPage.nodes[0].home.heroText}`)}
                    <div className="scroll-prompt"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section services p-y-100">
          <div className="container">
            <div className="row pt-100">
              <div className="col d-flex justify-content-between align-items-center">
                <div className="heading">
                  {parse(`${data.allWpPage.nodes[0].home.section1Heading}`)}
                </div>
                <div className="link overflow-hidden">
                  <Link to="/" className="btn-services">{data.allWpPage.nodes[0].home.section1Link.title}</Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="content p-y-100">
                  <div className="row">

                    {data.allWpMenuItem.edges[0].node.childItems.nodes.map((service) => {
                      return (
                          <div className="col">
                            <div className="service-group">
                              <div className="service-heading">
                                <h3 className="h3">{service.label}</h3>
                              </div>
                              <div className="services-content pt-3">
                                <ul className="list-style-none p-0 m-0">
                                  {service.childItems.nodes.map((serviceList) => {
                                    return (
                                        <Link><li className="text-grey pl-0 pr-2 pt-2 pb-2">{serviceList.label}</li></Link>
                                    )
                                  })}
                                </ul>
                              </div>
                            </div>
                          </div>
                      )
                    })}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section projects h-min-1000">
          <div className="container-fluid h-min-1000 p-0 m-0">
            <div className="row h-min-1000 p-0 m-auto">
              <div className="col overflow-hidden p-0 m-0">
                <div className="project h-100 position-relative">
                  <div className="overlay"></div>
                  <div className="project-image w-100 h-100" style={{ backgroundImage: `url(${project1})` }}></div>
                </div>
              </div>
              <div className="col p-0 m-0">
                <div class="row h-50 p-0 m-auto">
                  <div className="col overflow-hidden p-0 m-0">
                    <div className="project h-100 position-relative">
                      <div className="overlay"></div>
                      <div className="project-image w-100 h-100" style={{ backgroundImage: `url(${project2})` }}></div>
                    </div>
                  </div>
                </div>
                <div className="row h-50 p-0 m-auto">
                  <div className="col p-0 m-0">
                    <div className="row h-100 p-0 m-auto">
                      <div className="col overflow-hidden p-0 m-0">
                        <div className="project h-100 position-relative">
                          <div className="overlay">

                          </div>
                          <div className="project-image w-100 h-100" style={{ backgroundImage: `url(${project3})` }}></div>
                        </div>
                      </div>
                      <div className="col overflow-hidden p-0 m-0">
                        <div className="project h-100 position-relative">
                          <div className="overlay"></div>
                          <div className="project-image w-100 h-100" style={{ backgroundImage: `url(${project4})` }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  )
}