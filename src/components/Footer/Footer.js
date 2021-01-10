import React from "react"
import { Link } from "gatsby"
import Logo from "../Logo/Logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer className="section-footer bg-primary pt-5 pb-5">
      <div className="container">
        <div className="row pt-5 pb-5">
          <div className="col">
            <Logo />
          </div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col-3">
            <span className="h4 text-white">Web</span>
            <ul className="list-inline pt-3 text-grey ">
              <Link to="/">
                <li className="mt-2 mb-2 text-white">Web Design</li>
              </Link>
              <Link to="/">
                <li className="mt-2 mb-2 text-white">Web Development</li>
              </Link>
              <Link to="/">
                <li className="mt-2 mb-2 text-white">E-Commerce</li>
              </Link>
            </ul>
          </div>
          <div className="col-3">
            <span className="h4 text-white">Digital Marketing</span>
            <ul className="list-inline pt-3">
              <Link to="/">
                <li className="mt-2 mb-2 text-white">SEO</li>
              </Link>
              <Link to="/">
                <li className="mt-2 mb-2 text-white">Google AdWords</li>
              </Link>
              <Link to="/">
                <li className="mt-2 mb-2 text-white">Email Marketing</li>
              </Link>
            </ul>
          </div>
          <div className="col-3">
            <span className="h4 text-white">Social</span>
            <ul className="list-inline pt-3">
              <Link to="/">
                <li className="mt-2 mb-2 text-white">Social Media Marketing</li>
              </Link>
              <Link to="/">
                <li className="mt-2 mb-2 text-white">Content Creation</li>
              </Link>
              <Link to="/">
                <li className="mt-2 mb-2 text-white">Influencer Marketing</li>
              </Link>
            </ul>
          </div>
          <div className="col-3">
            <span className="h4 text-white">Creative</span>
            <ul className="list-inline pt-3">
              <Link to="/">
                <li className="mt-2 mb-2 text-white">Branding</li>
              </Link>
              <Link to="/">
                <li className="mt-2 mb-2 text-white">Graphic Design</li>
              </Link>
              <Link to="/">
                <li className="mt-2 mb-2 text-white">Logo Design</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-3">
            <span className="h4 text-white">Opening Hours</span>
            <p className="h6 mt-3 text-white">
              <strong>Monday - Friday</strong>
              <br></br>
              9:00M - 5:00PM
            </p>
          </div>
          <div className="col-3">
            <span className="h4 text-white">Address</span>
            <p class="mt-3">
              <Link className="h6 text-white" to="/">
                31 Moreau Mews, Applecross, WA 6153, Perth Australia
              </Link>
            </p>
          </div>
          <div className="col-3">
            <span className="h4 text-white">Email</span>
            <p class="mt-3">
              <Link className="h6 text-white" to="/">
                hello@wordofmouthagency.com.au
              </Link>
            </p>
          </div>
          <div className="col-3">
            <span className="h4 text-white">Phone</span>
            <p class="mt-3">
              <Link className="h6 text-white" to="/">
                (08) 9386 0049
              </Link>
            </p>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-3">
            <Link className="h4 mr-3 text-white" to="/">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </Link>
            <Link className="h4 mr-3 text-white" to="/">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </Link>
            <Link className="h4 mr-3 text-white" to="/">
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>
          </div>
          <div className="col-6">
            <p className="h6 text-white">
              © Word Of Mouth Agency 2020 - Spread The Word!
            </p>
          </div>
          <div className="col-3">
            <Link className="h6 text-white" to="/">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
