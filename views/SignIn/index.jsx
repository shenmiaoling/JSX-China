import React from 'react'
import TextField from 'material-ui/TextField'
import {orange500, blue500} from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
require('./styles')
module.exports = React.createClass({
  getInitialState(){
    return {
      open: false
    }
  },
  handleTouchTap(){
    this.setState({
      open: true,
    })
  },

  handleRequestClose(){
    this.setState({
      open: false,
    })
  },
  render() {
    const styles = {
      floatingLabelFocusStyle: {
        color: blue500,
      },
    };
    return <div>
      <h2 className="signin-text">用户注册</h2>
      <div className="signin-form">
      <TextField
        floatingLabelText="用户名"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      /><br />
      <TextField
        floatingLabelText="邮箱"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
      /><br />
      <TextField
        floatingLabelText="密码"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        type="password"
      /><br />
      <TextField
        floatingLabelText="再次确认密码"
        floatingLabelStyle={styles.floatingLabelStyle}
        floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
        type="password"
      /><br />
      <div className='signin-form-btn'>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="注册"
        />
        <Snackbar
          open={this.state.open}
          message="恭喜注册成功！"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
  </div>
  </div>
  }
})

