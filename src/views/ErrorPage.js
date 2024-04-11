import React from "react"
import { Helmet } from "react-helmet"
import { Helmet } from "react-helmet"
import "../assets/scss/style.scss"

const ErrorPage = () => {
  return (
    <>
      <div className="site-wrap">
        <div className="error-hero-slider">
          <div className="container">
            <div className="row no-gutters align-items-stretch">
              <div className="col-lg-12 ml-rg-auto py-5">
                <h2 className="error-hero-heading">
                  <span class="coral-underlined"> Page not found.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorPage
