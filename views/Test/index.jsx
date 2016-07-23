import React from 'react'
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
// import MobileTearSheet from '../../../MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
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
    return <div className="pages-404">
      <h4>测试用。。。</h4>
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Add to my calendar"
        />
        <Snackbar
          open={this.state.open}
          message="Event added to your calendar"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
      <div>
          <List>
            <Subheader>Recent chats</Subheader>
            <ListItem
              primaryText="Brendan Lim"
              leftAvatar={<Avatar src="http://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a" />}
              rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
              primaryText="Eric Hoffman"
              leftAvatar={<Avatar src="http://cdn.sstatic.net/Sites/stackoverflow/img/apple-touch-icon.png?v=c78bd457575a" />}
              rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
              primaryText="Grace Ng"
              leftAvatar={<Avatar src="https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=328&d=identicon&r=PG" />}
              rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
              primaryText="Kerem Suer"
              leftAvatar={<Avatar src="https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=328&d=identicon&r=PG" />}
              rightIcon={<CommunicationChatBubble />}
            />
            <ListItem
              primaryText="Raquel Parrado"
              leftAvatar={<Avatar src="https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=328&d=identicon&r=PG" />}
              rightIcon={<CommunicationChatBubble />}
            />
          </List>
          <Divider />
          <List>
            <Subheader>Previous chats</Subheader>
            <ListItem
              primaryText="Chelsea Otakan"
              leftAvatar={<Avatar src="https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=328&d=identicon&r=PG" />}
            />
            <ListItem
              primaryText="James Anderson"
              leftAvatar={<Avatar src="https://www.gravatar.com/avatar/6d8ebb117e8d83d74ea95fbdd0f87e13?s=328&d=identicon&r=PG" />}
            />
          </List>
      </div>
    </div>
  }
})

