import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

export default () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link
          className={headerStyles.title}
          activeClassName={headerStyles.activeNavItem}
          to="/"
        >
          The Witcher
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/books"
            >
              Witcher Books
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/witchers"
            >
              Witchers
            </Link>
          </li>
          <li>
            <Link
              className={headerStyles.navItem}
              activeClassName={headerStyles.activeNavItem}
              to="/magicians"
            >
              Magicians
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
