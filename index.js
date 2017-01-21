import Core from './src/core.js'
// import ObjectAssign from 'object-assign'

export default class RaziloComponent {
	constructor(name, extbp, bp) {
		let isString = typeof extbp === 'string';
		this.register(name, isString ? extbp : null, isString ? bp : extbp, document._currentScript.ownerDocument);
	}

	/**
	 * Register New Component
	 */
	register(name, ext, bp, component) {
		for (let key in bp) this[key] = bp[key];
		return Core.registerElement(this, name, ext, component);
	}

	/**
	 * Fires an event off from the components element
	 * @param string name The name of the event
	 * @param mixed detail [optional] Any optional details you wish to send
	 */
	// fireEvent(name, detail) return function )

	/**
	 * Get the current working root element (the host) (generated on bind to preserve element)
	 */
	// getHost() { returns host }

	/**
	 * Clone object without reference
	 */
	// cloneObject() { returns host }

	/**
	 * Custom element created, but not currently on dom
	 */
	// OPTIONAL created() { }

	/**
	 * Custom element attached to dom
	 */
	// OPTIONAL attached() { }

	/**
	 * Custom element detached from dom
	 */
	// OPTIONAL detached() { }

	/**
	 * Custom element atttibute has changed somehow
	 * @param string name The name of the attribute added, removed or changed
	 * @param string oldVal The old value of the attribute.
	 * @param string newVal The new value of the attribute.
	 */
	// OPTIONAL attributeChanged(name, oldVal, newVal) { }
}
