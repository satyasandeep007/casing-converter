export const toCamelCase = (str) => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join(" ")
        .replace(/\s(.)/g, ($1) => { return $1.toUpperCase(); })
        .replace(/\s/g, "")
        .replace(/^(.)/, ($1) => { return $1.toLowerCase(); });
};

export const toPascalCase = (str) => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase()
            .replace(/^(.)/, ($1) => { return $1.toUpperCase(); }))
        .join("");
};

export const toSnakeCase = (str) => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        //    .map(x => x.toLowerCase())
        //    .map(x => x.toUpperCase())
        .join("_");
};

export const toKebabCase = (str) => {
    return str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        //    .map(x => x.toLowerCase())
        //    .map(x => x.toUpperCase())
        .join("-");
};