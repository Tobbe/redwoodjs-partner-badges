// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import BadgeLayout from './layouts/BadgeLayout/BadgeLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BadgeLayout}>
        <Route path="/share" page={SharePage} name="share" />
        <Route path="/customize" page={CustomizeTicketPage} name="customizeTicket" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
