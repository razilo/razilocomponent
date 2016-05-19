import Core from './src/core.js'

export default class RaziloComponent {
	constructor(name, ext) {
		this.__name = name;
		this.__extends = ext;
	}

	/**
	 * Register New Component
	 */
	register() {
		return Core.registerElement(this, this.__name, this.__extends);
	}

	/**
	 * Fires an event off from the components element
	 * @param string name The name of the event
	 * @param mixed detail [optional] Any optional details you wish to send
	 */
	fireEvent(name, detail)	{
		return Core.fire(this.getHost(), name, detail);
	}

	/**
	 * Get the current working root element (the host) (generated on bind to preserve element)
	 */
	// getHost() { returns host }

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
