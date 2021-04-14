//#region Reverse a string

//1st implementation
function reverse(str) {
  //check
  if (!str || typeof str != "string" || str.length < 2) return str;

  const backWards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backWards.push(str[i]);
  }

  return backWards.join("");
}

//2nd implementation
function reverse2(str) {
  if (!str || typeof str != "string" || str.length < 2) return str;
  return str.split("").reverse().join("");
}

//3rd implementation
const reverse3 = (str) => [...str].reverse().join("");

console.log(reverse("Hello"));

//#endregion
