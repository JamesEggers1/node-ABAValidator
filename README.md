ABAValidator  [![Build Status](https://secure.travis-ci.org/JamesEggers1/node-ABAValidator.png)](http://travis-ci.org/JamesEggers1/node-ABAValidator)
=============

The American Bankers Association validation module provides a way of validating US-based Routing Number both on the client side in the user's browser as well as server side with Node.js.

## Installation ##

    npm install abavalidator

## Testing ##

The ABAValidator module has unit tests built around it than can be used to verify the package before usage.  The tests are written with the Mocha and Should modules and running the below command will import such.  

    npm test abavalidator

## Usage ##

Once the package has been installed using `npm`, using the module is very simple.  At the moment, the module includes presents itself as an object that exposes a single method, `validate`.  `validate` accepts a single string parameter that represents the routing number.

#### Node.js ####

```javascript
var aba = require("abavalidator");
var is_valid = aba.validate("123123123"); // should respond true.
```

## Using ABAValidator Client-Side ##
ABAValidator is also compatible with client-side JavaScript development by way of Browserify. To Learn more about Browserify, go to http://browserify.org/.

ABAValidator 1.0.5 provides a more globally accessible way of using ABAValidator outside of Browserify. The algorithm is the same as of v2.0; however, the client-side instructions are different and provided with that version.


#### Html ####

```html
<script type="text/javascript" src="path/to/aba-validation.js"></script>
```

#### JavaScript ####

```javascript
var aba = ABAValidator;
var is_valid = aba.validate("123123123"); // should respond true.
```

By default, the ABAValidator module places itself into the global scope in the browser.  If you would prefer to NOT have it be directly attached to the `window` object, you can add your own `namespace` at the top of the aba-validator.js file.

## Contributors ##
James Eggers
[Roman Shtylman](https://github.com/shtylman)

## License (MIT) ##

Copyright (c) 2015 James Eggers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.