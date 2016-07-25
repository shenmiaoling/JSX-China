import React from 'react'
import {
  Route,
  Router,
  IndexRoute,
  browserHistory
} from 'react-router'
import Application from '../views/app'
import NotFound from '../views/404'
import Test from '../views/Test'
import LogIn from '../views/LogIn'
import SignIn from '../views/SignIn'
module.exports = () => {
  return <Router history={browserHistory}>
    <Route path='/' component={Application}>
      <Route path='test' component={Test}/>
      <Route path='login' component={LogIn}/>
      <Route path='signin' component={SignIn}/>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
}
