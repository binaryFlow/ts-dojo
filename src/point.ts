export type Point = [x: number, y: number];

export function distance(a: Readonly<Point>, b: Readonly<Point>): number {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];

  return Math.hypot(dx, dy);
}

export function move(p: Readonly<Point>, dx: number, dy: number): Point {
  return [p[0] + dx, p[1] + dy];
}

export function swap<T, U>(pair: readonly [T, U]): [U, T] {
  return [pair[1], pair[0]];
}

console.log(distance([0, 0], [3, 4])); // 5
console.log(move([1, 1], 2, -1)); // [3,0]
console.log(swap(["id", 42])); // [42, "id"]
