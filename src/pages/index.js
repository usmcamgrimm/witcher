import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <h2>Enter the world of The Witcher</h2>
      <p>
        Interested in the books? <Link to="/books">The Witcher books</Link>
      </p>
    </Layout>
  )
}
