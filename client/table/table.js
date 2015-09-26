import React, { Component } from 'react/addons';
import { QueBall } from '../balls/QueBall';
import * as Dispatcher from '../dispatcher';
import * as physics from '../physics';

let Transition = React.addons.TransitionGroup

const PoolTable = {
  svgStyle: { width: '850px', height: '430px'},
  tableDimensions: { width: 800, height: 400 },
}


export class Table extends Component {

  constructor(props) {
    super(props);

    this.state = {
      balls: {
         que: {
            x: 400,
            y: 200,
            angle: 0,
            force: 0,
        }
      }
    };


    Dispatcher.addDebuggerListener(this.handleDebuggerChange.bind(this));
    Dispatcher.addBallAnimationListener(this.handleBallAnimation.bind(this));
  }

  setBallsState(balls) {
    let state = {
      balls: {

      }
    };
    state.balls.que = this.getBallState(balls.que);
    this.setState(state);
  }

  getBallState(ball) {

    let next = physics.getCoordinates(ball.angle, ball.force, ball.x, ball.y);

    // Check that dimensions are valid
    if(next.x > 0 && next.x <= PoolTable.tableDimensions.width)  {
      ball.x = next.x;
    } 
    else if (next.x <= 0) {
      ball.x = 0;
      ball.isMoving = false;
      ball.angle = 180 - ball.angle;
    }
    else {
      ball.x = PoolTable.tableDimensions.width;
      ball.isMoving = false;
      ball.angle = 180 - ball.angle;
    }

    if(next.y > 0 && next.y <= PoolTable.tableDimensions.height)  {
      ball.y = next.y;
    }
    else if (next.y <= 0) {
      ball.y = 0;
      ball.isMoving = false;
      ball.angle = ball.angle * -1
    }
    else {
      ball.y = PoolTable.tableDimensions.height;
      ball.isMoving = false;
      ball.angle = ball.angle * -1
    }

    Dispatcher.debug({QueBallState: ball });
    return ball;
  }


  handleBallAnimation() {
    this.setBallsState(this.state.balls);
  }

  handleDebuggerChange(src) {

    let angle = src.QueBall.angle;
    let force = src.QueBall.force;
    let x = src.QueBall.x;
    let y = src.QueBall.y;

    let balls = {
        que: {
          x: x,
          y: y,
          angle: angle,
          force: force,
        }
    };

    this.setBallsState(balls);
  };

  render() {

    let tableOutlineStyle = {

    };

    tableOutlineStyle.fill = 'green';
    tableOutlineStyle.width = PoolTable.tableDimensions.width + 'px';
    tableOutlineStyle.height = PoolTable.tableDimensions.height + 'px';

    return (
      <svg style={ PoolTable.svgStyle }>

        <g transform="translate(0, 0)">
          <rect style={ tableOutlineStyle }></rect>
            <Transition component="g">
              <QueBall x={this.state.balls.que.x} y={this.state.balls.que.y} />
            </Transition>
        </g>

      </svg>
    );
  }

}