import { Component } from "react";

export class Filter extends Component {
  render() {
    return (
      <>
        <h2>Find contacts by name</h2>
        <input name="find" type="text" onChange={this.props.find} />
      </>
    );
  }
}
