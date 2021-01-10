import React from "react"
import Mainmenu from "./Nav/Nav"
import Logo from "../Logo/Logo"

const Header = () => {
  return (
    <header id="page-header" className="page-header">
      <div className="page-header-inner">
        <div className="container">
          <div className="row">
            <div className="col p-0 m-0 d-flex justify-content-between align-items-center">
              <Logo />
              <Mainmenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
