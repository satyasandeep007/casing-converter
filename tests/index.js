const caseConverter = require("../index");
const { toCamelCase, toPascalCase, toSnakeCase, toKebabCase, toFlatCase } = caseConverter;

const camelCase = caseConverter.toCamelCase("My-name_is=satya+sandeep");
const pascalCase = toPascalCase("My-name_is=satya+sandeep");
const snakeCase = toSnakeCase("My-name_is=satya+sandeep");
const kebabCase = toKebabCase("My-name_is=satya+sandeep");
const flatCase = toFlatCase("My-name_is=satya+sandeep");

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
if (flatCase === "Mynameissatyasandeep") {
    console.log("test case passed");
} else {
    console.log("test case failed");
}
