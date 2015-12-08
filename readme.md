MicroJS
===

MicroJS is a non-framework javascript library. It's goal is to provide the 5% of jQuery that is used 95% of the time, but in a way that is still working with vanilla javascript objects.

It's a set of helper methods only, the framework will not construct it own objects.

Most of these methods are pretty common standard methods, the kind of method you'd see as a stack overflow answer. There will be minor tweaks where appropriate, but the goal is to make a library where none of the helper methods require learning new concepts.

This library removes the abstraction that jQuery provides, removing a very heavy weight dependency (both in terms of an extra layer to think about and in terms of code size)


Helper methods
---

`$(selector: string, el?:Element)` - wraps `document.querySelector` passing the seletor. You can also provide a second argument of an element which this will be scoped to (finds an element that's a child)

`$$(selector: string, el?:Element` - wraps `document.querySelectorAll` and returns an array of nodes (allowing you to use the native array methods in javascript). As with `$` you can scope it to a certain element 

`$.isEmpty(value:any)` - returns true if the value is null or is an empty array or an empty object (no properties defined)

`$.post(url: string, params: any, data: any)` - makes an ajax POST request and returns a promise that resolves when it receives a 200 and fails otherwise

`$.get(url: string, params: any)` - makes an ajax GET request and returns a promise that works as with `$.post`
