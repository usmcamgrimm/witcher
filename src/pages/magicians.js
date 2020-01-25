import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      <h1>Magicians</h1>
      <p>
        Also called sorcerers or sorceresses, they practice magic, and have been
        trained at an academy to extract magical energy.
      </p>
      <p>
        <Link to="/witchers">Witchers</Link>
      </p>
    </div>
  )
}
