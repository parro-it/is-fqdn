# is-fqdn

> Check if a string represent a fully qualified domain name.

[![Travis Build Status](https://img.shields.io/travis/parro-it/is-fqdn.svg)](http://travis-ci.org/parro-it/is-fqdn)
[![NPM module](https://img.shields.io/npm/v/is-fqdn.svg)](https://npmjs.org/package/is-fqdn)
[![NPM downloads](https://img.shields.io/npm/dt/is-fqdn.svg)](https://npmjs.org/package/is-fqdn)

# Installation

```bash
npm install --save is-fqdn
```

# Usage

```js
const isFQDN = require("is-fqdn");

console.log(isFQDN("www.parro.it"));
// true

console.log(isFQDN("256.0.0.0"));
// false

console.log(isFQDN("s!ome.com"));
// false
```

# License

The MIT License (MIT)

Copyright (c) 2016 Andrea Parodi
