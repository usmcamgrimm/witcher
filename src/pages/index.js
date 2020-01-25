import React from "react"
import { Link } from "gatsby"
import Footer from "../components/footer"
import Header from "../components/header"

export default () => {
  return (
    <div>
      <Header />
      <h2>Enter the world of The Witcher</h2>
      <p>
        Interested in the books? <Link to="/books">The Witcher books</Link>
      </p>
      <Footer />
    </div>
  )
}
