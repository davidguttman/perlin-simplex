perlin-simplex
==============

Simplex Perlin noise

This is [Sean McCullough's JS Port of Sefan Gustavson's Java implementation](https://gist.github.com/banksean)

## Example ##

```js
var Simplex = require('..')
var simplex = new Simplex()
simplex.noise(x, y)
simplex.noise3d(x, y,z)
```