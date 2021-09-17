/**
 * Topic: Promise.race()
 */

function resolveTimeOut(value, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(value), delay));
}

function rejectTimeOut(value, delay) {
  return new Promise((_, reject) => setTimeout(() => reject(value), delay));
}

const firstPromise = resolveTimeOut("Do some workout now 🤸‍♂️", 2000);
const secondPromise = rejectTimeOut("Avoid Netflix and chill 😒", 1000);

//---> Returns the first resolved or rejected promise
(async () => {
  try {
    const promise = await Promise.race([firstPromise, secondPromise]);
    console.log(promise);
  } catch (error) {
    console.log(error);
  }
})();
