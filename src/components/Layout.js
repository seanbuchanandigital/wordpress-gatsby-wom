import React from "react"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Aux from "react-aux"

const Layout = ({ children }) => {
  return (
    <Aux>
      <div id="page" className="site">
        <div className="content-wrapper">
          <Header></Header>
          <div id="page-content" className="page-content">
              <div id="page-main-content" className="page-main-content">
                  <article className="content">{children}</article>
              </div>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </Aux>
  )
}

export default Layout
