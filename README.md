perlin-simplex
==============

Simplex Perlin noise

This is [Sean McCullough's JS Port of Sefan Gustavson's Java implementation](https://gist.github.com/banksean)

## Installation ##

    npm install perlin-simplex

## Usage ##

```js
var Simplex = require('perlin-simplex')
var simplex = new Simplex()
simplex.noise(x, y)
simplex.noise3d(x, y,z)
```

## Example ##

    node example/index.js

![](http://i.imgur.com/glsoFnH.png)