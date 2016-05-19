import RaziloBind from 'razilobind'

/**
 * RaziloComponent Web Component Builder Library
 * Offers simple cross browser web components to be written in ES6
 */
export default class Core {
	/**
	 * [public] - Register a new custom element, creating a naff working scope for the interface
	 * @param object blueprint The custom element blueprint to create the custom element from
	 */
	static registerElement(blueprint, name, ext)
	{
		if (!name) throw 'Cannot register custom element without a custom element name via register(name, extends) or new CustomElement({name: ..., extends: ...})';

		// create proto
		var proto = Object.create(HTMLElement.prototype);

		// forward callbacks
		proto.createdCallback = function()
		{
			Core.applyTemplate(this, Core.cloneObject(blueprint), name);
			console.log('rc:', Core.getThis(), this)
			this.razilobind.model.getHost = Core.getThis.bind(this); // get the element scope
			if (typeof this.razilobind.model.created === 'function') this.razilobind.model.created.call(this.razilobind.model);
		};

		proto.attachedCallback = function()
		{
			if (typeof this.razilobind.model.attached === 'function') this.razilobind.model.attached.call(this.razilobind.model);
			setTimeout(Core.uncloak.bind(this), 10);
		};

		proto.detachedCallback = function()
		{
			if (typeof this.razilobind.model.detached === 'function') this.razilobind.model.detached.call(this.razilobind.model);
		};

		proto.attributeChangedCallback = function(att, oldVal, newVal)
		{
			if (typeof this.razilobind.model.attributeChanged === 'function')  this.razilobind.model.attributeChanged.call(this.razilobind.model, att, oldVal, newVal);
			Core.fire(this, 'attributechanged', {attribute: att, oldVal: oldVal, newVal: newVal});
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
	static fire(element, name, detail)
	{
		if (element.host) element = element.host;

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

	static uncloak()
	{
		if (this.hasAttribute('cloak')) this.removeAttribute('cloak');
	}

	/**
	 * [public] - Clone an objects properties and methods
	 * @param object The object to clone
	 * @return object The cloned object (not a reference to an object)
	 */
	static cloneObject(obj)
	{
		if (typeof obj !== 'object') return obj;
		var temp = {};
		for (var key in obj) temp[key] = Core.cloneObject(obj[key]);

		return temp;
	}

	/**
	 * [private] - Apply a template to a new custom element in light dom (default) or shadow dom (with 'shadow-dom' attribute on custom element)
	 * @param mixed host The custom element to apply the template to, usually 'this' but can be selector string
	 */
	static applyTemplate(host, model, name)
	{
		if (!host) throw 'Host custom element not specified, please add custom element reference or lookup';

		var importDoc = document.querySelector('link[type="text/razilo"]');
		var template = !!importDoc ? importDoc.import.querySelector('template#' + name) : false;
		if (!template) return host.razilobind = {model: model};

		var matches = template.content.querySelectorAll('content[select]');
		var match = template.content.querySelector('content');
		var content, root, ele, found;

		var rb = new RaziloBind();

		if (matches.length > 0)
		{
			content = {};

			// cache content from host
			for (var i = 0; i < matches.length; i++)
			{
				if (!matches[i].hasAttribute('select')) continue;
				var name = matches[i].getAttribute('select');
				found = host.querySelector(name);
				if (found)
				{
					content[name] = found;
					found.parentNode.removeChild(found);
				}
			}

			// apply template
			host.innerHTML = template.innerHTML;

			// apply data binding to template if set, do this before merging in content to stop dual binding
			rb.bind(host, model);

			// apply any content
			for (var key in content)
			{
				ele = host.querySelector('content[select=' + key + ']');
				if (!!content[key]) ele.parentNode.insertBefore(content[key], ele);
				ele.parentNode.removeChild(ele);
			}
		}
		else if (match)
		{
			// cache content from host, if this fails with things like naff if, need to swap this a childNodes.length > 0..... childNodes[0]
			content = document.createDocumentFragment();
			while(host.firstChild) content.appendChild(host.firstChild);

			// apply template
			host.innerHTML = template.innerHTML;

			// apply data binding to template if set, do this before merging in content to stop dual binding
			rb.bind(host, model);

			// grab content area
			ele = host.querySelector('content');

			// add children from host to parent and remove parent content element
			var fragment = document.createDocumentFragment();
			while(content.firstChild) fragment.appendChild(content.firstChild);
			ele.parentNode.replaceChild(fragment, ele);
		}
		else
		{
			// apply template
			host.innerHTML = template.innerHTML;
			host.setAttribute('no-traverse', '');
			rb.bind(host, model);
		}

		return true;
	}
}
