// src/AppRouter.tsx

import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import App from './App'
import Home from './pages/HomePage/HomePage'
import Contact from './pages/ContactPage/ContactPage'
import Books from './pages/BooksPage/BooksPage'
import BuildSiteCourse from './pages/BuildSiteCoursePage/BuildSiteCoursePage'
import YouBuildMySite from './pages/YouBuildMySitePage/YouBuildMySitePage'
import CoachingHourly from './pages/CoachingHourlyPage/CoachingHourlyPage'
import CoachingPackage from './pages/CoachingPackagePage/CoachingPackagePage'
import Members from './pages/MembersPage/MembersPage'
import Login from './pages/LoginPage/LoginPage'
import Articles from './pages/ArticlesPage/ArticlesPage'
import NotFound from './pages/NotFoundPage/NotFoundPage'
import Footer from './layout/Footer/Footer'
import Header from './layout/Header/Header'

function AppRouter() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Books" component={Books} />
        <Route exact path="/BuildSiteCourse" component={BuildSiteCourse} />
        <Route exact path="/YouBuildMySite" component={YouBuildMySite} />
        <Route exact path="/CoachingHourly" component={CoachingHourly} />
        <Route exact path="/CoachingPackage" component={CoachingPackage} />
        <Route exact path="/Members" component={Members} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Articles" component={Articles} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </Router>
  )
}

export default AppRouter
