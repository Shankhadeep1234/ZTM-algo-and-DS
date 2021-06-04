const ages = [12, 15, 18, 24, 39, 40];

const checkNotAdult = (age) => age >= 18;

ages.findIndex(checkNotAdult); //---> Output: 2
