const avenger = {
  id: null,
  name: "Spiderman",
};

//without assert
if (!avenger.id) console.log("Avenger ID is missing");

//with assert
console.assert(avenger.id, "Avenger ID is missing");
