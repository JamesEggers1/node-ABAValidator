ABAValidator  [![Build Status](https://secure.travis-ci.org/JamesEggers1/node-ABAValidator.png)](http://travis-ci.org/JamesEggers1/node-ABAValidator)
=============

The American Bankers Association validation module provides a way of validating US-based Routing Number both on the client side in the user's browser as well as server side with Node.js.

## Installation ##

    npm install ABAValidator

## Testing ##

The ABAValidator module has unit tests built around it than can be used to verify the package before usage.  The tests are written with the Mocha and Should modules and running the below command will import such.  

    npm test ABAValidator

## Usage ##

Once the package has been installed using `npm`, using the module is very simple.  At the moment, the module includes an `ABAValidator` object that exposes a single method, `validate`.  `validate` accepts a single string parameter that represents the routing number.

#### Node.js ####

```javascript
var aba = require("ABAValidator").ABAValidator;
var is_valid = aba.validate("123123123"); // should respond true.
```

## Using ABAValidator Client-Side ##
In addition to being usable as a Node.js module, the validator can also be used client-side in the user's web browser.  When you install `ABAValidator` using `npm`, instructions will appear how to install it for client-side JavaScript consumption.

While you can copy the `aba-validation.js` file from the module's installation directory under `node_modles`, an automated script has been provided to assist you in this copy process and to make it more streamlined.  To do a client-side install, simply type the following `npm` command:

    npm run-script ABAValidator client-install

Once you run that command, you'll be prompted to provide the path to which to install `aba-validation.js` for use by your client-side JavaScript.  At that point, you can reference the file in your html and JavaScript code as shown below.


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

Copyright (c) 2012 James Eggers

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.