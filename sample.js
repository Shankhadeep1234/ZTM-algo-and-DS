const avengers = [
  { first: "Tony", last: "Stark" },
  { first: "Petter", last: "Parker" },
  { first: "Tony", last: "Stark" },
];

const uniqueKeyToAvengers = new Map(
  avengers.map((avenger) => [avenger.first + "\t" + avenger.last, avenger])
); // [key,value]

const uniqueAvengers = [...uniqueKeyToAvengers.values()];

uniqueAvengers;
// output :  [
// {
//   { first: "Tony", last: "Stark" },
//   { first: "Petter", last: "Parker" }
// }
//]
