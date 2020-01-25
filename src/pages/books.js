import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      <h1>The Witcher Books</h1>
      <p>Info on the Witcher books by Andrzej Sapkowski</p>
      <p>
        <Link to="/witchers">Witchers</Link>
      </p>
      <p>
        <Link to="/magicians">Magicians</Link>
      </p>
    </div>
  )
}
