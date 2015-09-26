
// Bubble Up Debugging to the debugger`
let debugMessageListeners = [];
export function addDebugMessageListener(onDebug) {
  debugMessageListeners.push(onDebug);
}
export function debug(message) {
  debugMessageListeners.forEach((fun) => fun.call(this, message));
}

// Bubble Up Debugging to the debugger`
let debuggerListeners = [];
export function addDebuggerListener(onDebug) {
  debuggerListeners.push(onDebug);
}
export function debuggerChange(message) {
  debuggerListeners.forEach((fun) => fun.call(this, message));
}

// Send pause notification to all corners of the app
let ballAnimationListeners = [];
let ballAnimationInterval;
export function addBallAnimationListener(onPause) {
  ballAnimationListeners.push(onPause);
}
export function startBallAnimation() {
  ballAnimationInterval = setInterval(() => {
    ballAnimationListeners.forEach((fun) => fun.call(this));
  }, 1);

}
export function endBallAnimation() {
  clearInterval(ballAnimationInterval);
  ballAnimationInterval = '';
}
// Send pause notification to all corners of the app
export function pause() {
  if(ballAnimationInterval) {
    this.endBallAnimation();
  }
  else {
    this.startBallAnimation();
  }
}
