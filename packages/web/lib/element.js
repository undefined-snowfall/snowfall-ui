import { State } from './state'

/**
 * @constructor
 * @extends HTMLElement
 */
function SnowfallElement() {
  HTMLElement.call(this)
  this.attachShadow({ mode: 'closed' })
}

SnowfallElement.prototype = HTMLElement.prototype
/**
 * @template {import("./state").ReactiveValue} T
 * @param {T} value
 */
SnowfallElement.prototype.useState = function(value) {
  return new State(this, value)
}

export { SnowfallElement }
