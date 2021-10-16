# casing-converter

> Transform strings to camelCase, PascalCase, snake_case and Kebab-case.

## Installation

```sh
$ npm install casing-converter
```

## Usage

```javascript
'use strict';
const { toCamelCase, toPascalCase, toSnakeCase, toKebabCase, toFlatCase } = require("casing-converter");


console.log(toCamelCase("My-name_is=satya+sandeep"));
console.log(toPascalCase("My-name_is=satya+sandeep"));
console.log(toSnakeCase("My-name_is=satya+sandeep"));
console.log(toKebabCase("My-name_is=satya+sandeep"));
console.log(toFlatCase("My-name_is=satya+sandeep"));
console.log(toInverseCase("mYNAMEiSSATYASANDEEP"));

/** 
 * Output :
 * 
 * myNameIsSatyaSandeep
 * MyNameIsSatyaSandeep
 * My_name_is_satya_sandeep
 * My-name-is-satya-sandeep
 * mynameissatyasandeep
 * MynameIssatyasandeep
*/

```

## License

ISC