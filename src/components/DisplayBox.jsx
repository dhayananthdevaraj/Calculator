import React, { Component } from 'react';

class DisplayBox extends Component {
  render() {
    return (
      <div className="display-box">
        {this.props.value}
      </div>
    );
  }
}

export default DisplayBox;

