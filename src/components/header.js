import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <header>
      <h1>The Witcher</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Witcher Books</Link>
          </li>
          <li>
            <Link to="/witchers">Witchers</Link>
          </li>
          <li>
            <Link to="/magicians">Magicians</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
