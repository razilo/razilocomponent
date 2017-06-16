# Razilo Component


__Browser Support__ - IE9+, Chrome, FF, Safari, Opera


Razilo Component is a helper library to make it super simple to create custom web components, allowing you to create blueprints with dependancies, style, templates and logic in a single file. The blueprint will be used to create custom web components that you can use easily in your html, create the blueprint once, add as many html elements of that type as you wish. In addition to this, we also offer some easter eggs such as template binding to blueprint model, date formatting etc to make your life much much easier.

Razilo Component is the spin off from Razilo Bind, a simple light html to js model binder, using this tool to apply it's binding to a custom web component, making it easier to build them. in addition to the tool ,it also comes with some components of it's own through Razilo Components (razilocomponents) all of which can be found at component.razilo.net.


## Why use Custom Web Components?


Well if you are like me, and lazy, you will not like doing things more than once. What we do here is take the default things we do with web apps, and put them into reusable blocks to allow us to add them easily. We then have an interface to them via attributes, properties and methods to use the functionality baked in. They will work nicely with things like jQuery, angular, basically any other tech that does not use shadow dom for encapsualtion (will brake style bleed in and require more work on your part). You can use just the built web components, or you can make your own, why not make your app the starting web component.

The alternative? Well that would be a framework, the equivilent to this in a framework (frameworks give much much more than a library) would be polymer or x-tags. Or similar functionaly to web components can be created using things like angular (directives?), angular 2 (complex and breaking revisions!), vue (compilable es6 components) and react (not sure what they are called here but you get the idea). So web components are not a new thing, but instead of creating some crazy method of generating re-usable modules, or some way overly complicated ecosystem, we do it in the generic javascript way (current and future native API's, polyfilled for older browsers).

Simplicity is the key here folks, simple to install, simple to setup and simple to use. You get to choose to bundle your components or not, all compoentns are html imports that will use native browser caching anyway, should you choose to bundle these into a single file and negate the lazy loading benefits of using html imports, just vulcanize your components.

## Why Razilo Component?


Well like we said, we do things in a way that is future compliant, you could create the components yourself in native JS, we just take care of some other stuff such as binding models to templates [https://github.com/smiffy6969/razilobind], injecting content from element into component, event handling that kind of thing. We also offer some gravy, things like dateFormat [https://github.com/felixge/node-dateformat]. So as you can see we do things in a generic way with as little dependancies as possible. The aim here is to depend on as little as possible with polyfills as much as we can (polyfills are the future, they are used les as browser catch up).

All components generated with Razilo Component can be parsed and read by current browsers (pretty much N-1 is tested), no compiling needed, unless you want to vulcanie your components into a single import, or import Razilo Component into your project in an ES6 way (yes we are ES6).


# Installation  


## The Simple way


The quick simple approach is to npm install razilo component, which will pull in any dependancies.


```bash
npm install razilocomponent
```

Once installed, you can use the none ES5 bundle file in your html head area. Dont forget to include the poyfills for browsers that are not yet up to date

index.html

```html
<script type="text/javascript" src="/node_modules/webcomponents.js/webcomponents-lite.js"></script>
<script type="text/javascript" src="/node_modules/proxy-oo-polyfill/proxy-oo-polyfill.js"></script>
<script type="text/javascript" src="/node_modules/promise-polyfill/promise.js"></script>

<script type="text/javascript" src="/node_modules/razilocomponent/build/razilocomponent.min.js"></script>
```

## Other Ways


Dont want to add this directly, maybe you have some app logic anyway, or want to build in other things. You can pull this in as an ES6 import into your project target file...


From your logic ES6 file, import the tool and any dependencies,


app.js

```js
import 'node_modules/webcomponentsjs/lite.js'
import 'node_modules/proxy-oo-polyfill/proxy-oo-polyfill.js'
import 'node_modules/promise-polyfill/promise.js'
import RaziloComponent from 'razilocomponent'

// razilo modules are all ES6 modules so make them available on global window
window.RaziloComponent = RaziloComponent;
```

This will pull in a few polyfills, fix any missing API's in older browsers and then import Razilo Component in, making it available globally to allow each web component to use the class to create new objects. If you are looking for a more complete solution, you can also find razilorequest and razilocookie to offer cookie maangement and request tools (with promises) to allow you to further your project with backend calls for data (slim3 is great for this!). Alternatively, pull in your own tools at this point to manage requests and other things.


Now you will need to compile with browserify or similar, the ES6 code in your app.js file into a distributable file, and add that to the head area of your index.html file as we did above.


# Setup


So now you are setup and ready to go, a few things about creating a web component...


Web compoennts go in a single .html file, they contain style, template and logic (and any other imports for deps). To register your component, in your script area of your html file, you do the following.


```js
// A component with no actual logic
new RaziloComponent('my-component');

// A component with a model, to do things
new RaziloComponent('my-component', {
	property: '...',

	method: function() {

	}
});

// A component that extends an existing component
new RaziloComponent('my-component', 'button', {
	property: '...',

	method: function() {

	}
});
```

Things to note here, custom components have to have a hyphon as per spec. Also there are built in methods, some that are run on events, some that you can run, so don't override them. Accessing anything inside the model can be done with `this.property` to access the objects properties and methods. More on this next.


# Usage


Thats really about it, you can now go right ahead and create a new component. Add a new file called my-component.html, put this in the file


my-component.html (all custom components must have a hyphon)

```html
<!--
* my-component
* @author You
* @site Your Site
-->

<!-- DEPENDANCIES -->
<link rel="import" href="another-component-used-in-this-one.html">

<!-- STYLE - Encapsulate all css to tag name, plain css people -->
<style>
	my-component { display: block; }
</style>

<!-- TEMPLATE -->
<template id="my-component">
	<p>Your tmeplate goes here</p>
	<p bind-text="propertyOne"></p>
</template>

<!-- LOGIC -->
<script>
	new RaziloComponent('my-component', {
		propertyOne: 'bind data using bind.razilo.net',

		created: function() {
			// run when the element is first created
		},

		attached: function() {
			// run when element is added to dom
		},

		detached: function() {
			// run when element is removed from dom
		},

		attributeChanged: function(name, oldVal, newVal) {
			// run when attributes change on the host
		},

		fireEvent: function(name, details) {
			// use this to fire events on element
		},

		getHost: function() {
			// use this to get the host element
		},

		cloneObject: function(objA, objB) {
			// use this to clone an object
		},

		dateFormat: function(dateObject, format) {
			// use this to format dates using dateFormat [https://github.com/felixge/node-dateformat]
		},

		someFunction: function() {
			// Your own function, you can access this function from the template, pelase refer to bind.razilo.net
		}
	});
</script>
```

Save the file, import the file in your index.html file...

```html
<link rel="import" href="my-component.html" async/>
```

You should now be able to use `<my-component></my-component>` now in your html files.


A little on importing. Here you notice an async attribute, this will speed up processing of the dom by deferring the import to an async task, pulling it out the normal flow. Good news for speed but will cause FOUC (Flash Of Unstyled Content) as the page takes the time to render it, thats a flash of rubbish looking html before it looks right. Newer browsers are stopping this from happening more and more, but an async will bring it right back. It's up to you, the more you use web components the more you will know when to and when not to async imports.

Now all imports are cached, so its a good tool for dep management using native browser caching, due to this I tend to use un-vulcanized imports until such as time a project improves by vulcanization. Its a bit suck it and see people, why load tens of components in a single file when you only need one, and why do ten seperate requests when one bundled file will do, find your tipping point. On a side note, razilo-partial custom element works well here pulling in partials and caching their deps, so hitting a page twice loads the deps once, check it out in razilo components, we use it for pulling in partial html fragments to use as a page type system for apps.

I recommend testing with non vulcanised files first, if its acceptable, stick with it, organise your compoennts to use each other and depend on each other, then when you are ready to vulcanize, you can just hit the first import and it will pull in all it needs to creating a single file which you can then pull in your index.html file, but like i say, its a toss up here between loading too much or lazy loading over and over, find your tipping point.

One last thing, you notice we only every imported one html component into our index file, thats right, we have an entry point to our app, the main component app that is treated just like any other component, from here on all your custom component html imports are all done in  the deps area of components.

# Services


Well you have two options here, you can either write an ES6 service, compile it into a bootstrap file, include it in your index.html file and your good to use it anywhere in the system. I'm not going to go into this detail really as it is purely down to user preference, ES6 and compile it in, inject it in as a dependency in a component, compile your own razilo files via ES6 imports and add them to this list, there are lots of options for you.

Another way to create a service, one I quite like, is to create a component as a service worker. Simple enough, create yourself a component, remove the template, set the element to display none, then map component methods to the element api as follows.


```html
<!--
* my-service - Component service worker
* @author Your Name
* @site your.site.com
* @licence MIT
-->

<!-- STYLE - Encapsulate all css to tag name -->
<style>
	my-service { display: none !important; }
</style>

<!-- LOGIC -->
<script>
	new RaziloComponent('my-service', {
		created: function()
		{
			// Map component commands you want to be available to element api
			this.getHost().getItem = this.getItem.bind(this);
			this.getHost().setItem = this.setItem.bind(this);
			this.getHost().deleteItem = this.deleteItem.bind(this);
		},

		getItem: function(key)
		{
			// Do something here...
			// 'this' will return the component instance due to '.bind(this)' above
			console.log('getItem()', this, key);
		},

		setItem: function(key, value)
		{
			// Do something here...
			// 'this' will return the component instance due to '.bind(this)' above
			console.log('setItem()', this, key, value);
		},

		deleteItem: function(key)
		{
			// Do something here...
			// 'this' will return the component instance due to '.bind(this)' above
			console.log('deleteItem()', this, key);
		},

		other: function(something)
		{
			// not mapped through!
		}
	});
</script>
```

All you need to do now is html import the component into your app as normal, then add the element to your application either at component application root, or in another component.


```html
<my-service></my-service>
```

You will now be able to access this service as follows...


```js
var service = document.querySelector('my-service');
service.getItem('one');
service.setItem('one', 'this is one');
service.deleteItem('one');
```

Add to your application as just an element for site wide single instance service, or give it an id to create more than one instance...


```js
var service1 = document.querySelector('my-service#first');
var service2 = document.querySelector('my-service#second');
service1.getItem('one');
service2.getItem('two');
```

This can be a great alternative to pure JS services, and also will allow you to do things like add attribtues to the component service worker to take in setup parameters, default values etc.


# Creating an Application


Well this is simple, really, why mess around with one structure for compoennts and one for apps, just create a new component to house your app called my-app, and then go from there. You can then pull in any other web components in a dependancy type fashion instead of pulling them in your index.html, this will leave your index.html clean, and your app.html as your starting point as follows.


create a demo app called demo-app.html

```html
<!--
* demo-app
* @author You
* @site Your Site
-->

<!-- DEPENDANCIES -->
<link rel="import" href="my-component.html" async/>

<!-- STYLE - Encapsulate all css to tag name, plain css people -->
<style>
	demo-app { display: block; }
</style>

<!-- TEMPLATE -->
<template id="demo-app">
	<p>Your app goes in here, you can use binding with Razilo Bind in here and ref the model objects below.</p>
	<my-component></my-component>
</template>

<!-- LOGIC -->
<script>
	new RaziloComponent('demo-app', {
		propertyOne: 'bind data using bind.razilo.net',

		propertyTwo: [],

		created: function() {
			// run when the element is first created
		},

		attached: function() {
			// run when element is added to dom

			// uncloak the app on load
			this.getHost().setAttribute('uncloak', '');
		},

		detached: function() {
			// run when element is removed from dom
		},

		attributeChanged: function(name, oldVal, newVal) {
			// run when attributes change on the host
		},

		fireEvent: function(name, details) {
			// use this to fire events on element
		},

		getHost: function() {
			// use this to get the host element
		},

		cloneObject: function(objA, objB) {
			// use this to clone an object
		},

		dateFormat: function(dateObject, format) {
			// use this to format dates using dateFormat [https://github.com/felixge/node-dateformat]
		},

		someFunction: function() {
			// Your own function, you can access this function from the template, pelase refer to bind.razilo.net

			// PEOPLE BE CLEVER WITH BOUND PROPERTIES !!

			// Write once where possible !!

			// Be carefull iterating/adding properties people, be clever, any bound properties have getters and setters to track changes
			// Playing with properties can eventually slow things down, always build new objects first and push/add as and when, dont' itterate
			// over bound properties adding data on one at a time.
			//
			// When binding, you want to change properties on the model as little as possible to maximize speed, each change of a property
			// and its children will promote a check to update the bindings, a loop could do this lots of times, if you do this on a clean var first
			// and then copy it to the proeprty once, you only have to update bindings once!

			// WITH GREAT POWER COMES GREAT RESPONSIBILITY

			// ONE BINDING UPDATE = GOOD
			var something = [];
			for (var i = 0; i < 100; i++) {
				something[i] = 'whatever';
			}
			this.propertyTwo = something;

			// 100 BINDING UPDATES = BAD
			for (var i = 0; i < 100; i++) {
				this.propertyTwo[i] = 'whatever';
			}

			// Like anything people, making great things means knowing how all the parts work, all binding tools have the ability to be evil, use them with caution!
		}
	});
</script>
```


Save the file, import the file in your index.html file now along with the Razilo Component dep instead of pulling your my-component in your index.html...

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Boom!</title>

		<!-- Add cloak to ensure applied before page shown -->
		<style>
			*[cloak] { display: block; opacity: 0; -webkit-transition: opacity 0.5s ease-in-out; -moz-transition: opacity 0.5s ease-in-out; transition: opacity 0.5s ease-in-out; } *[uncloak] { opacity: 1; }
		</style>

		<script type="text/javascript" src="/node_modules/razilocomponent/build/razilocomponent.min.js"></script>
		<link rel="import" href="demo-app.html" async/>
	</head>
	<body>
		<demo-app cloak></demo-app>
	</body>
</html>
```

Your app will now be the starting point and will pull in the dep for my-component. this will also cloak the component, fading it in when the component is attached to the dom to stop FOUC. thats the starting point right there for a full blown web app. You should now go look at some of the Razilo Components that are available, these offer things like page structure, menus, routes, controls, all sorts, enough to build a basic application.



__WIP... TO BE CONTINUED...__
