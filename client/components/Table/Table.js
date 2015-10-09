import React, { Component } from 'react/addons';

let Transition = React.addons.TransitionGroup;

const PoolTable = {
  svgStyle: { width: '850px', height: '430px'},
  tableDimensions: { width: 800, height: 400 },
};

export default class Table extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let tableOutlineStyle = { };

    tableOutlineStyle.fill = 'green';
    tableOutlineStyle.width = PoolTable.tableDimensions.width + 'px';
    tableOutlineStyle.height = PoolTable.tableDimensions.height + 'px';

    return (
      <svg style={ PoolTable.svgStyle }>
        <g transform="translate(0, 0)">
          <rect style={ tableOutlineStyle }>
          </rect>

          {this.props.children}
        </g>
      </svg>
    );
  };
}