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
   * Copy
   * @returns returns a new copy of the current vector
   */
  copy = () => {
    return new Vector([this.values[0], this.values[1], this.values[2]]);
  };

  /**
   * Adding two vectors u and v
   */
  add = (u: Vector) => {
    for (let i = 0; i < this.vector.length; i++) {
      this.vector[i] = this.vector[i] + u.values[i];
    }
    return this.vector;
  };

  /**
   * Adding two vectors u and v
   */
  sub = (u: Vector) => {
    for (let i = 0; i < this.vector.length; i++) {
      this.vector[i] = this.vector[i] - u.values[i];
    }
    return this.vector;
  };

  /**
   * Check if two vectors are equal
   */
  isEqualTo = (u: Vector) => {
    for (let i = 0; i < this.vector.length; i++) {
      if (this.vector[i] != u.values[i]) {
        return false;
      }
      return true;
    }
  };

  /**
   * Current vector is greater than given vector
   */
  isGreaterThan = (u: Vector) => {
    for (let i = 0; i < this.vector.length; i++) {
      if (this.vector[i] > u.values[i]) {
        return true;
      }
      return false;
    }
  };
  /**
   * Current vector is lesser than given vector
   */
  isLesserThan = (u: Vector) => {
    for (let i = 0; i < this.vector.length; i++) {
      if (this.vector[i] < u.values[i]) {
        return true;
      }
      return false;
    }
  };

  /**
   * Get dimension x, y, z values of vector
   */
  getDimension = (index: number) => {
    if (index >= this.values.length) {
      throw new Error("Array index out of bound \n");
    }
    return this.values[index];
  };

  /**
   * modify already created vector
   */
  assign = (index: number, value: number) => {
    if (index >= this.values.length) {
      throw new Error("Array index out of bound \n");
    }
    this.vector[index] = value;
  };

  /**
   * Dot product of current and given vector
   */
  dot = (u: Vector) => {
    if (this.vector.length != u.values.length) {
      throw new Error("Both vectors must be of equal dimension \n");
    }
    let result = 0;
    for (let i = 0; i < this.vector.length; i++) {
      result += this.vector[i] * u.values[i];
    }
    return result;
  };

  /**
   * cross product 2D
   */
  cross2D = (u: Vector) => {
    if (this.vector.length != u.values.length) {
      throw new Error("Both vectors must be of equal dimension \n");
    }
    return this.vector[0] * u.values[1] - this.vector[1] * u.values[0];
  };

  /**
   * cross product 2D
   */
  cross3D = (u: Vector) => {
    if (this.vector.length != u.values.length) {
      throw new Error("Both vectors must be of equal dimension \n");
    }
    return new Vector([
      this.vector[1] * u.values[2] - this.vector[2] * u.values[1],
      this.vector[2] * u.values[0] - this.vector[0] * u.values[2],
      this.vector[0] * u.values[1] - this.vector[1] * u.values[0],
    ]).values;
  };

  /**
   * Magnitude of current vector
   */
  magnitude = () => {
    let sumOfSquares = 0;
    for (let i = 0; i < this.vector.length; i++) {
      sumOfSquares += Math.pow(this.vector[i], 2);
    }
    return Math.sqrt(sumOfSquares);
  };

  /**
   * Normalize - returns and unit vector
   */
  normalize = () => {
    const magnitude = this.magnitude();
    for (let i = 0; i < this.vector.length; i++) {
      this.assign(i, this.vector[i] / magnitude);
    }
    return this.vector;
  };
}
