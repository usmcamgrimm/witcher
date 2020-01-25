import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <h1>Magicians</h1>
      <p>
        Also called sorcerers or sorceresses, they practice magic, and have been
        trained at an academy to extract magical energy.
      </p>
      <p>
        <Link to="/witchers">Witchers</Link>
      </p>
    </Layout>
  )
}
