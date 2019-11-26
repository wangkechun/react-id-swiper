import React from "react";

class Hello extends React.Component<{ title: string }, {}> {
  render() {
    return <h1> hello {this.props.title} </h1>;
  }
}

export default Hello;
