MicroJS
===

MicroJS is a non-framework javascript library. It's goal is to provide the 5% of jQuery that is used 95% of the time, but in a way that is still working with vanilla javascript objects.

It's a set of helper methods only, the framework will not construct it own objects.

Most of these methods are pretty common standard methods, the kind of method you'd see as a stack overflow answer. There will be minor tweaks where appropriate, but the goal is to make a library where non of the helper methods requiring learning new concepts.

This library removes the abstraction that jQuery provides, removing a very heavy weight dependency (both in terms of an extra layer to think about and in terms of code size)

If you want to have some laughs, check out the home page of jQuery. It says:

> Lightweight Footprint: Only 32kB minified and gzipped.

Just to put that in perspective, AngluarJS, which is widely heralded as one of the heaviest frameworks out there, is *just* 46kB minified and gzipped (which includes jqLite, which is their own lighweight version of jQuery).



Helper methods
---

`$` - wraps `document.querySelector`
`$$` - wraps `document.querySelectorAll` and returns an array of nodes