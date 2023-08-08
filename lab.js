let characters = [
    {
      name: "Luke Skywalker",
      height: 177,
      gender: "male",
      mass: 77,
      eye_color: "brown",
    },
    {
      name: "Leia Organa",
      height: 160,
      gender: "female",
      mass: 56,
      eye_color: "blue",
    },
    {
      name: "Han Solo",
      height: 180,
      gender: "male",
      mass: 80,
      eye_color: "brown",
    },
    {
      name: "Chewie",
      height: 222,
      gender: "male",
      mass: 190,
      eye_color: "black",
    },
    {
      name: "kevien",
      height: 106,
      gender: "male",
      mass: 32.2,
      eye_color: "red",
    },
  ];


/*Find*/

const BlueEyes = characters.find(character => character.eye_color === 'blue');
const firstName = BlueEyes ? BlueEyes.name :"";
console.log(firstName);




const wight = characters.find( x => x.mass > 50);
const genders = wight ? wight.gender :"";
console.log(genders);


/*FILTER*/

const hei = characters.filter(function(h) {
  return h.height < 200;
});
console.log(hei);



const m = characters.filter(function(ma) {
  return ma.gender == "male";
});
console.log(m);

/*MAP*/

const namesOnly = characters.map(function(character) {
  return character.name;
});

console.log(namesOnly);



const hightsOnly = characters.map(function(hi) {
  return hi.height;
});

console.log(hightsOnly);


/*SORT*/

characters.sort(function(a, b) {
  return a.mass - b.mass;
});
console.log(characters);


characters.sort(function(a, b) {
  return b.mass - a.mass;
});
console.log(characters);


/*EVERY*/

const v = characters.every(function(ev) {
  return ev.mass > 40
});
console.log(v);


const ta = characters.every(function(t) {
  return t.height > 200
});
console.log(ta);

/*SOME*/

const be = characters.some(function(blue){
return blue.eye_color == "blue"
});
console.log(be);



const taller = characters.some(function(tall){
  return tall.height > 210
  });
  console.log(taller);