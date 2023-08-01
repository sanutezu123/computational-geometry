import { Coordinates } from "./geometry/coordinates";
import { Vector } from "./geometry/vector";

const coord1 = new Coordinates(10, 10, 10);
const coord2 = new Coordinates(20, 20, 20);

document.getElementById("coord1")!.innerHTML = coord1.values.toString();
document.getElementById("coord2")!.innerHTML = coord2.values.toString();

const vector1 = new Vector(coord1.values);
const vector2 = new Vector(coord2.values);
const vector3 = vector1.copy().add(vector2);
const vector4 = vector1.copy().sub(vector2);

document.getElementById("vector1")!.innerHTML = vector1.values.toString();
document.getElementById("vector2")!.innerHTML = vector2.values.toString();
document.getElementById("vector3")!.innerHTML = vector3.toString();
document.getElementById("vector4")!.innerHTML = vector4.toString();

console.log(vector1.isEqualTo(vector2));
const vector5 = new Vector([20, 30]);
const vector6 = new Vector([20, 30]);
console.log(vector5.isEqualTo(vector6));
console.log(vector6.getDimension(1));
vector6.assign(1, 100);

const vector7 = new Vector([3, 0]);
const vector8 = new Vector([3, 3]);
console.log(vector8.dot(vector7));

const vector9 = new Vector([1, 0, 0]);
const vector10 = new Vector([0, 1, 0]);
console.log(vector9.cross3D(vector10));
console.log(vector8.magnitude());

const vector11 = new Vector([10, 0, 0]);
console.log(vector11.magnitude());
console.log(vector11.normalize());
