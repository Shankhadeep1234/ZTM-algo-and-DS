let isRequired = () => {
  throw new Error("This is a mandatory parameter..");
};

let greetings = (name = isRequired(), message = "Hello Visitor") => {
  return `${message}, ${name}`;
};

greetings(); //Error: This is a mandatory parameter..
