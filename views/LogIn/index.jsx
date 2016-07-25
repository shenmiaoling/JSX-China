import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {Link} from 'react-router'
require('./styles')
module.exports = React.createClass({
  render() {
    return <div className="input-form">
      <TextField
        hintText="请输入账号"
        floatingLabelText="账号"
      /><br />
      <TextField
        hintText="请输入密码"
        floatingLabelText="密码"
        type="password"
      /><br />
      <div className="login-btn">
        <Link to="signin">
          <RaisedButton label="注册" className="sign-in"/>
        </Link>
          <RaisedButton label="登录" primary={true} className="log-in"/>
      </div>
    </div>
  }
})

