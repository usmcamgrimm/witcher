import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      <h1>Witchers</h1>
      <h2>What is a "Witcher"?</h2>
      <p>
        Witchers are male humans that are developed from childhood to be monster
        slayers. The boys go through intense training in both mind and body and
        are subjected to mutagens, which transform their speed, strength, and
        other abilities.
      </p>
      <p>
        <Link to="/magicians">Magicians</Link>
      </p>
    </div>
  )
}
