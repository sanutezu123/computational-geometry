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
