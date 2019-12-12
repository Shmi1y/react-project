import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入App组件
import App from './App.jsx'
//引入Provider
// import { Provider } from 'react-redux'
//引入样式重置文件
import './assets/css/reset.css'

// 渲染
ReactDOM.render((
  <App />
),document.getElementById('root'))