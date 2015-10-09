import React, { Component, PropTypes } from 'react';

export default class Ball extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes =  {
    x: React.PropTypes.string,
    y: React.PropTypes.string,
    fill: React.PropTypes.string,
  };

  render() {
    return (
      <circle
        cx = {this.props.x}
        cy = {this.props.y}
        r = { '20' }
        fill={this.props.fill} />
    );
  }

}