enum TrafficLight {
  Red,
  Green,
  Yellow,
}

export function nextLight(light: TrafficLight): TrafficLight {
  switch (light) {
    case TrafficLight.Red:
      return TrafficLight.Green;
    case TrafficLight.Green:
      return TrafficLight.Yellow;
    case TrafficLight.Yellow:
      return TrafficLight.Red;
    default:
      return light satisfies never;
  }
}

console.log(nextLight(TrafficLight.Red)); // expect TrafficLight.Green
console.log(nextLight(TrafficLight.Green)); // expect TrafficLight.Yellow
console.log(nextLight(TrafficLight.Yellow)); // expect TrafficLight.Red
