/**
 * @typedef {import("./element").SnowfallElement} SnowfallElement
 * @typedef {string | number | boolean | null} ReactiveValue
 */

/**
 * @constructor
 * @template {ReactiveValue} T
 * @template {SnowfallElement} E
 * @param {T} value A reactive value to use as the state.
 * @param {E} element A Snowfall Element to bind the state.
 * @property {E} element
 */

function State(element, value) {
  /** @type {E} */
  this.element = element
  /** @type {T}*/
  this._value = value
}

Object.defineProperty(State.prototype, 'value', {
  value: null,
  get() {
    return this.value
  }
})

State.prototype.valueOf = function () {
  return this.value
}

export { State }
