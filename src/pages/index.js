import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <div>
      <h1>The Witcher</h1>
      <h2>Enter the world of The Witcher</h2>
      <p>
        Interested in the books? <Link to="/books">The Witcher books</Link>
      </p>
    </div>
  )
}
