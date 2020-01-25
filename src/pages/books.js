import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <h1>The Witcher Books</h1>
      <p>Info on the Witcher books by Andrzej Sapkowski</p>
      <p>
        <Link to="/witchers">Witchers</Link>
      </p>
      <p>
        <Link to="/magicians">Magicians</Link>
      </p>
    </Layout>
  )
}
