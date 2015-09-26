export function getCoordinates(angle, distance, startX, startY) {

  // convert angle to radians
  var rad = angle * Math.PI / 180;

  /// x=5cosθ,and y=5sinθ.
  return {
    x: startX + Math.cos(rad) * distance,
    y: startY - Math.sin(rad) * distance,
  }
}