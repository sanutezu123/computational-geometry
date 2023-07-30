export class Coordinates {
  private coordinate: number[] = [];

  constructor(x: number, y: number);
  constructor(x: number, y: number, z: number);

  constructor(...values: number[]) {
    if (values.length === 2) {
      this.coordinate[0] = values[0];
      this.coordinate[1] = values[1];
    } else if (values.length === 3) {
      this.coordinate[0] = values[0];
      this.coordinate[1] = values[1];
      this.coordinate[2] = values[2];
    } else {
      throw new Error("Invalid parameteres, point needs 2 or 3 values");
    }
  }

  get values(): number[] {
    return this.coordinate;
  }
}
