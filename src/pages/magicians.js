import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => {
  return (
    <div>
      <Header />
      <h1>Magicians</h1>
      <p>
        Also called sorcerers or sorceresses, they practice magic, and have been
        trained at an academy to extract magical energy.
      </p>
      <p>
        <Link to="/witchers">Witchers</Link>
      </p>
      <Footer />
    </div>
  )
}
