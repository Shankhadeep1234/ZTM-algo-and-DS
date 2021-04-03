const obj = {
  a: "I will be added 😀",
  ...(true && { b: "I will be added also 😃" }),
  ...(false && { c: "They don't wanna add me 😢" }),
};

console.log(obj);
