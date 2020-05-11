# casing-converter

> Transform strings to camelCase, PascalCase, snake_case and Kebab-case.

## Installation

```sh
$ npm install casing-converter
```

## Usage

```javascript
'use strict';
const { toCamelCase, toPascalCase, toSnakeCase, toKebabCase } = require("casing-converter");


console.log(toCamelCase("My-name_is=satya+sandeep"));
console.log(toPascalCase("My-name_is=satya+sandeep"));
console.log(toSnakeCase("My-name_is=satya+sandeep"));
console.log(toKebabCase("My-name_is=satya+sandeep"));

/** 
 * Output :
 * 
 * myNameIsSatyaSandeep
 * MyNameIsSatyaSandeep
 * My_name_is_satya_sandeep
 * My-name-is-satya-sandeep
 * 
*/

```

## License

ISC