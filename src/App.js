import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      friendsList: ["john", "jacob", "jingle", "heimer", "schmidt"],
      friend: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.addFriend = this.addFriend.bind(this);
    this.deleteFriend = this.deleteFriend.bind(this);
  }
  changeHandler(event) {
    this.setState({
      friend: event.target.value
    });
  }

  addFriend() {
    this.setState({
      friendsList: [...this.state.friendsList, this.state.friend],
      friend: ''
    })
  }

  deleteFriend(index) {
    const friendsList = [...this.state.friendsList];
    friendsList.splice(index, 1);
    this.setState({
      friendsList: friendsList
    });
  }

  render() {
    const mappedFriends = this.state.friendsList.map((friend, index) => {
      return <div>
        <span key={index}>{friend}</span>
        <button onClick={() => this.deleteFriend(index)}>X</button>
      </div>
    });
    return (
      <div className="App">
        <div>{mappedFriends}</div>
        <input
          type="text"
          onChange={this.changeHandler}
          value={this.state.friend}
        />
        <button onClick={this.addFriend}>Add Friend</button>
      </div>
    );
  }
}

export default App;
