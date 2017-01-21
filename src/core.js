import RaziloBind from 'razilobind'
import {RaziloBindDateFormat} from 'razilobind-core'

/**
 * RaziloComponent Web Component Builder Library
 * Offers simple cross browser web components to be written in ES6
 */
export default class Core {
	/**
	 * [public] - Register a new custom element, creating a naff working scope for the interface
	 * @param object blueprint The custom element blueprint to create the custom element from
	 */
	static registerElement(bp, name, ext, component)
	{
		if (!name) throw 'Cannot register custom element without a custom element name via register(name, extends) or new CustomElement({name: ..., extends: ...})';

		// create proto
		var proto = Object.create(HTMLElement.prototype);

		// forward callbacks, all these happen as a per instance of component basis, outside of these things are per component registration
		proto.createdCallback = function()
		{
			Core.createTemplate(this, name, Core.cloneObject(bp), component); // create only
			this.razilobind.model.getHost = Core.getThis.bind(this); // get the element scope
			this.razilobind.model.cloneObject = Core.cloneObject; // get the element scope
			this.razilobind.model.fireEvent = Core.fire.bind(this); // setup fireEvent on host
			this.razilobind.model.dateFormat = RaziloBindDateFormat.dateFormat; // setup fireEvent on host
			if (typeof this.razilobind.model.created === 'function') this.razilobind.model.created.call(this.razilobind.model);
		};

		proto.attachedCallback = function()
		{
 			Core.applyTemplate(this); // apply once all have been created, IMPORTANT!
			if (typeof this.razilobind.model.attached === 'function') this.razilobind.model.attached.call(this.razilobind.model);
		};

		proto.detachedCallback = function()
		{
			if (typeof this.razilobind.model.detached === 'function') this.razilobind.model.detached.call(this.razilobind.model);
		};

		proto.attributeChangedCallback = function(att, oldVal, newVal)
		{
			if (typeof this.razilobind.model.attributeChanged === 'function')  this.razilobind.model.attributeChanged.call(this.razilobind.model, att, oldVal, newVal);
			Core.fire('attributechanged', {attribute: att, oldVal: oldVal, newVal: newVal}, this);
		};

		// register custom element
		var protoWrap = {prototype: proto};
		if (!!ext) protoWrap.extends = ext;
		document.registerElement(name, protoWrap);
	}

	static getThis()
	{
		return this;
	}

	/**
	 * [public] - Fires an event off, from the provided element, or from scope if element not set
	 * @param HTML obejct element The element to fire from
	 * @param string name The name of the event
	 * @param mixed detail [optional] Any optional details you wish to send
	 */
	static fire(name, detail, element)
	{
		element = typeof element === 'undefined' ? this : (element.host ? element.host : element);

		var event;
		try { event = !detail ? new Event(name) : new CustomEvent(name, { 'detail': detail }); }
		catch(e)
		{
			// allback to create event old fashioned way
			event = document.createEvent('customEvent');
			if (detail) event.detail = detail;
			event.initEvent(name, true, true);
		}

		try
		{
			element.dispatchEvent(event);
		}
		catch(e)
		{
			console.log('MAX CALL STACK ERROR', e);
			console.log(element, event);
		}
	}

    /**
     * [public] - Clone an objects properties and methods
     * @param object The object to clone
     * @return object The cloned object (not a reference to an object)
     */
    static cloneObject(obj)
    {
        if (typeof obj !== "object" || obj === null) return obj;

        var clone;

        if (obj instanceof Date)
        {
            clone = new Date();
            clone.setTime(obj.getTime());
            return clone;
        }

        if (obj instanceof Array)
        {
            clone = [];
            for (var i = 0, len = obj.length; i < len; i++) clone[i] = Core.cloneObject(obj[i]);
            return clone;
        }

        // Handle Object
        if (obj instanceof Object)
        {
            clone = {};
            for (var att in obj) if (obj.hasOwnProperty(att)) clone[att] = Core.cloneObject(obj[att]);
            return clone;
        }

        throw new Error("Unable to clone object " + obj + ",  this object type is not supported in component blueprints.");
    }

	/**
	 * [private] - Apply a template to a fragment and apply binding to the framnet component, store this against the host element
	 * This will allow us to bind away without the worry of where scope lies, as all component binding happens in isolation.
	 * once all binding complete, we can move content around into it's correct place.
	 * @param html object host The custom element to apply the template to
	 * @param object model The model data to apply to the host
	 * @param object component The web component template to use as the template for building the html element
	 */
	static createTemplate(host, name, model, component)
	{
		if (!host) throw 'Host custom element not specified, please add custom element reference or lookup';

		var template = component.querySelector('template#' + name);
		if (!template) return host.razilobind = {model: model};

		// bind to component fragment then move into host html after all binds complete
		var rb = new RaziloBind({noParentBind: true});
		host.componentFragment = document.createDocumentFragment();
		host.componentFragment.appendChild(document.createElement('COMPONENT'));
		host.componentFragment.firstChild.innerHTML = template.innerHTML;
		rb.bind(host.componentFragment.firstChild, model);

		// move bind data from componentFragment to host ready for applying template, leave this until all binds completed (stops duplicate bindings)
		host.razilobind = host.componentFragment.firstChild.razilobind;
		delete host.componentFragment.firstChild.razilobind;
	}

	/**
	 * [private] - Apply built component to the host element. Takes a fragment component and merges it into the host html, mixing any content from the host into the component fragment first.
	 * @param mixed host The custom element to apply the template to, usually 'this' but can be selector string
	 */
	static applyTemplate(host)
	{
		if (!host.componentFragment) return;

		// do we need to apply any host content?... pull into fragment
		var matches = host.componentFragment.firstChild.querySelectorAll('content');
		if (matches.length > 0) {
			for (var i = 0; i < matches.length; i++)
			{
				if (matches[i].hasAttribute('select')) {
					// substitute fragment content placeholders with selected host content
					var name = matches[i].getAttribute('select');
					var found = host.querySelector(name);
					if (found) matches[i].parentNode.replaceChild(found, matches[i]);
				} else {
					// move all host content to fragment placeholder and remove placeholder
					while(host.firstChild) matches[i].parentNode.appendChild(host.firstChild);
					matches[i].parentNode.removeChild(matches[i]);
				}
			}
		}

		// transfer over the fragment to the host and remove
		host.innerHTML = '';
		while (host.componentFragment.firstChild.firstChild) host.appendChild(host.componentFragment.firstChild.firstChild);
		delete host.componentFragment;
	}
}
