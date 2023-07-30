import { Coordinates } from "./coordinates";

export class Vector {
  private vector: number[] = [];

  constructor(values: number[]) {
    if (values.length === 2) {
      this.vector[0] = values[0];
      this.vector[1] = values[1];
    } else if (values.length === 3) {
      this.vector[0] = values[0];
      this.vector[1] = values[1];
      this.vector[2] = values[2];
    } else {
      throw new Error("Invalid parameteres, vector needs 2 or 3 values");
    }
  }

  get values() {
    return this.vector;
  }
  /**
   * Adding two vectors u and v
   */
  add = (u: Vector) => {
    for (let i = 0; i < this.vector.length; i++) {
      this.vector[i] = this.vector[i] + u.vector[i];
    }
    return this.vector;
  };

  /**
   * Adding two vectors u and v
   */
  sub = (u: Vector) => {
    for (let i = 0; i < this.vector.length; i++) {
      this.vector[i] = this.vector[i] - u.vector[i];
    }
    return this.vector;
  };

  /**
   * Copy
   * @returns returns a new copy of the current vector
   */
  copy = () => {
    return new Vector([this.values[0], this.values[1], this.values[2]]);
  };
}
