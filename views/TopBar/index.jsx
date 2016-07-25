import React from 'react'
import {Link} from 'react-router'
import FlatButton from 'material-ui/FlatButton'
import ActionAndroid from 'material-ui/svg-icons/action/android'
import {blue400} from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close'
require('./styles')
module.exports = React.createClass({
  render() {
    const styles = {
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
}
    return(
        <div>
          <Link to='/test'>
            <FlatButton
            label="Primary"
            labelPosition="before"
            className='btn'
            hoverColor="#8AA62F"
            backgroundColor="#a4c639"
            icon={<ActionAndroid color='black' />}/>
          </Link>
            <FlatButton
            label="Choose an Image"
            labelPosition="after"
            rippleColor="pink"
            hoverColor="red"
            backgroundColor="#a4c639"
            >
            <input type="file" style={styles.exampleImageInput} />
          </FlatButton>
          <AppBar
            iconElementLeft={<FlatButton
            label="Primary"
            labelPosition="before"
            className='btn'/>}
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              >
              <Link to='/login'>
                <MenuItem primaryText="登录" />
                <MenuItem primaryText="注册" />
                <MenuItem primaryText="退出" />
              </Link>
              </IconMenu>
            }
          />
        </div>
    )
  }
})
