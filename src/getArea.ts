type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number };

export function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      return shape satisfies never;
  }
}
console.log(getArea({ kind: "circle", radius: 10 }));
console.log(getArea({ kind: "rectangle", width: 5, height: 10 }));
