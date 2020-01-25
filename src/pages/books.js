import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => {
  return (
    <div>
      <Header />
      <h1>The Witcher Books</h1>
      <p>Info on the Witcher books by Andrzej Sapkowski</p>
      <p>
        <Link to="/witchers">Witchers</Link>
      </p>
      <p>
        <Link to="/magicians">Magicians</Link>
      </p>
      <Footer />
    </div>
  )
}
