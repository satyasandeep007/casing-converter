const caseConverter = require("../index");
const { toCamelCase, toPascalCase, toSnakeCase, toKebabCase, toFlatCase, toInverseCase } = caseConverter;

const camelCase = toCamelCase("My-name_is=satya+sandeep");
const pascalCase = toPascalCase("My-name_is=satya+sandeep");
const snakeCase = toSnakeCase("My-name_is=satya+sandeep");
const kebabCase = toKebabCase("My-name_is=satya+sandeep");
const flatCase = toFlatCase("My-name_is=satya+sandeep");
const inverseCase = toInverseCase("mYNAMEiSSATYASANDEEP");

if (camelCase === "myNameIsSatyaSandeep") {
    console.log("test case passed");
} else {
    console.log("test case failed");
}
if (pascalCase === "MyNameIsSatyaSandeep") {
    console.log("test case passed");
} else {
    console.log("test case failed");
}
if (snakeCase === "My_name_is_satya_sandeep") {
    console.log("test case passed");
} else {
    console.log("test case failed");
}
if (kebabCase === "My-name-is-satya-sandeep") {
    console.log("test case passed");
} else {
    console.log("test case failed");
}
if (flatCase === "mynameissatyasandeep") {
    console.log("test case passed");
} else {
    console.log("test case failed");
}
if (inverseCase === "MynameIssatyasandeep") {
    console.log("test case passed");
} else {
    console.log("test case failed");
}
