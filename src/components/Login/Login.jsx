import React, { Component } from 'react'
//引入样式
import './Login.less'

class Login extends Component {
  render() {
      return (
        <div className="loginContainer">
          <img src="http://hkw8382ca.pic34.websiteonline.cn/upload/logo.png" alt="logo" />
          <p>新西兰最专业华人婚庆机构</p>
          <div className="login">点击进入</div>
        </div>
      )
  }
}
export default Login;
