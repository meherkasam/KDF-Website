import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import './App.css'
import Config from './pages/config'
import Home from './pages/home'

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/config">
            <Config />
          </Route>
        </Switch>
    </Router>
  )
}
