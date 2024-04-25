import { SnowfallElement } from '../lib'
import accordionStyle from "@snowfall-ui/core/accordion.scss"
/**
 * @constructor
 * @extends SnowfallElement
 */

function AccordionElement() {
  SnowfallElement.call(this)
}

Object.setPrototypeOf(AccordionElement.prototype, SnowfallElement.prototype)
export { AccordionElement }
