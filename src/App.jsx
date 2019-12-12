import React, { Component } from 'react'
//引入routes
import routes from './router/routes.js'
//引入路由组件
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login/Login.jsx'
export default class App extends Component {
  render() {
      return (
        <div>
          <Router>
              {/**不加switch 兩個頁面會同時顯示 */}
              <Switch>
                  <Route path='/' component={Login}></Route>
                    <Switch>
                      {
                        routes.map((route, index) => (<Route key={index} {...route} />))
                      }
                    </Switch>
              </Switch>
          </Router>
        </div>
      )
  }
}
