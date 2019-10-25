function controle(){
let shoeSize = document.getElementById("shoeSize").value;
let birthYear = document.getElementById("birthYear").value;
let result = (shoeSize * 2 + 5) * 50 - birthYear + 1766;

alert(`Nom de Zeus ! ${result}, on est sauvés !`);
}
