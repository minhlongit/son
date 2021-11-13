var myArray = [
  "0792.422.692",
  "0902.878.059",
  "0776.124.032",
  "0703.342.923",
  "0326.822.721",
];
var rand = myArray[Math.floor(Math.random() * myArray.length)];
var innerPhone = document.querySelectorAll("#text-number-phone");
innerPhone.forEach((element) => {
  element.innerHTML = rand;
});
