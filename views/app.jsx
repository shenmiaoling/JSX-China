import React from 'react'
import TopBar from './TopBar'
import Dialog from './Dialog'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
module.exports = React.createClass({
  render() {
    return <div className="app">
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <TopBar/>
      </MuiThemeProvider>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Dialog/>
      </MuiThemeProvider>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        {this.props.children}
      </MuiThemeProvider>

    </div>
  }
})
