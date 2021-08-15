//Hoisting in JS
/**
 * Question: Explain why the following piece of code works in a JavaScript environment, even if the method is not declared very first.
 *
 * Ans: In JavaScript, function declarations are getting hoisted. Therefore, The above sayHello method
 *      will be moved to the top of the scope before the code execution. Therefore, when the JavaScript
 *      runtime executes the sayHello function, it already knows about the function declaration.
 */

sayHello();

function sayHello() {
  console.log("Helloooooo");
}
