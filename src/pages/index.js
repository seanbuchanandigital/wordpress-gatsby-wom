import React from "react"
import Layout from "../../../wordpress-gatsby/src/components/Layout.js"
import "../assets/css/style.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import ExamplePage from "../hooks/gravityforms"
import {graphql, Link, useStaticQuery} from "gatsby"

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
      allWpProject(limit: 4) {
        nodes {
          title
          postTypeProject {
            image {
              sourceUrl
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
                <div className="overlay">
                  <h3 className="h1 font-weight-normal project-title">{data.allWpProject.nodes[0].title}</h3>
                </div>
                <div className="project-image w-100 h-100" style={{backgroundImage: `url(${data.allWpProject.nodes[0].postTypeProject.image.sourceUrl})`}}></div>
              </div>
            </div>
            <div className="col p-0 m-0">
              <div className="row h-50 p-0 m-auto">
                <div className="col overflow-hidden p-0 m-0">
                  <div className="project h-100 position-relative">
                    <div className="overlay">
                      <h3 className="h1 font-weight-normal project-title">{data.allWpProject.nodes[1].title}</h3>
                    </div>
                    <div className="project-image w-100 h-100" style={{backgroundImage: `url(${data.allWpProject.nodes[1].postTypeProject.image.sourceUrl})`}}></div>
                  </div>
                </div>
              </div>
              <div className="row h-50 p-0 m-auto">
                <div className="col p-0 m-0">
                  <div className="row h-100 p-0 m-auto">
                    <div className="col overflow-hidden p-0 m-0">
                      <div className="project h-100 position-relative">
                        <div className="overlay">
                          <h3 className="h1 font-weight-normal project-title">{data.allWpProject.nodes[2].title}</h3>
                        </div>
                        <div className="project-image w-100 h-100" style={{backgroundImage: `url(${data.allWpProject.nodes[2].postTypeProject.image.sourceUrl})`}}></div>
                      </div>
                    </div>
                    <div className="col overflow-hidden p-0 m-0">
                      <div className="project h-100 position-relative">
                        <div className="overlay">
                          <h3 className="h1 font-weight-normal project-title">{data.allWpProject.nodes[3].title}</h3>
                        </div>
                        <div className="project-image w-100 h-100" style={{backgroundImage: `url(${data.allWpProject.nodes[3].postTypeProject.image.sourceUrl})`}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section contact">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="contact p-y-100">
                <div className="heading">
                  <h2 className="h2">Let's Talk</h2>
                </div>
                <div className="contact-content">
                  {ExamplePage}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}