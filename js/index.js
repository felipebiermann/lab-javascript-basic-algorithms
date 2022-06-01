let hacker1 = "Felipe";
let hacker2 = "Gabriela";

console.log('The driver`s name is' + " " + hacker1)
console.log('The navigator`s name is' + " " + hacker2)


let tamanho1 = hacker1.length
console.log(tamanho1)

let tamanho2 = hacker2.length
console.log(tamanho2)

if(hacker1.length > hacker2.length) {
  
  return "It seems that the navigator has the longest name, it has" + " " + hacker2.length + " " + "characters";
  
} else if(hacker1.length < hacker2.length){
  return "The driver has the longest name, it has" + " " + hacker2.length + " " + "characters";
} else {
  return "Wow, you both have equally long names," + " " + hacker1.length + " " + "characters";
}
console.log(hacker1.toUpperCase().split("").join(" "));

let newName = "";
for(let i = 0; i < hacker1.length; i++) {
  newName += hacker1[i].toUpperCase() + " ";
}
console.log(newName)

let newNavName = "";
for(let i = hacker2.length - 1; i >= 0; i--) {
  newNavName += hacker2[i];
}
console.log (newNavName);

if(hacker1.localeCompare(hacker2) === -1) {
  return "The driver's name goes first.";
} else if (hacker1.localeCompare(hacker2) === 1) {
  return "Yo, the navigator goes first definitely.";
} else {
  return "What?! You both have the same name?";
}