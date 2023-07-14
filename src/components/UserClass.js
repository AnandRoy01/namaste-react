import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="user-card">
        <h1> count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          inclrease by 1
        </button>

        <h3>Name: {this.props.name}</h3>
        <h3>Location: {this.props.location}</h3>
        <h3>contact: john@doe.com</h3>
      </div>
    );
  }
}

export default UserClass;
