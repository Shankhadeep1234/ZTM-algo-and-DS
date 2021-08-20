// Invert keys and values of an object in #javascript

const obj = {
  IronMan: "Tony Stark",
  CaptainAmerica: "Steve Rogers",
  BlackWidow: "Natasha Romanoff",
  Falcon: "Sam Wilson",
};

const revertedObj = Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [value, key])
);

console.log(revertedObj);

/*
OUTPUT👉 : 
{
  'Tony Stark': 'IronMan',
  'Steve Rogers': 'CaptainAmerica',
  'Natasha Romanoff': 'BlackWidow',
  'Sam Wilson': 'Falcon'
}
*/
