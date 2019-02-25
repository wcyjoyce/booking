import flats from "../flats.js";

export function setFlats() {
  return {
    type: "SET_FLATS",
    payload: flats
  }
}

export function selectFlat(flat) {
  return {
    type: "SELECT_FLAT",
    payload: flat
  }
}
