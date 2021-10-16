const toCamelCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join(" ")
    .replace(/\s(.)/g, ($1) => {
      return $1.toUpperCase();
    })
    .replace(/\s/g, "")
    .replace(/^(.)/, ($1) => {
      return $1.toLowerCase();
    });
};

const toPascalCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) =>
      x.toLowerCase().replace(/^(.)/, ($1) => {
        return $1.toUpperCase();
      })
    )
    .join("");
};

const toSnakeCase = (str) => {
  return (
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      //    .map(x => x.toLowerCase())
      //    .map(x => x.toUpperCase())
      .join("_")
  );
};

const toKebabCase = (str) => {
  return (
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      //    .map(x => x.toLowerCase())
      //    .map(x => x.toUpperCase())
      .join("-")
  );
};

const toFlatCase = (str) => {
  return (
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      //    .map(x => x.toUpperCase())
      .join("")
  );
};

const toInverseCase = (str) => {
  return (
    str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => {
        if (x.toUpperCase() === x) return x.toLowerCase();
        if (x.toLowerCase() === x) return x.toUpperCase();
      })
      //    .map(x => x.toUpperCase())
      .join("")
  );
};

module.exports = {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toFlatCase,
  toInverseCase,
};
