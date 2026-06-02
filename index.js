function calculatePercentage() {
  const obtmarksref = document.getElementById("obtainedmarks");
  const totalmarksref = document.getElementById("totalmarks");

  const obtainedmarks = Number(obtmarksref.value);
  const totalmarks = Number(totalmarksref.value);

  const percentage = (obtainedmarks / totalmarks) * 100;

  const perref = document.querySelector("#percentage");
  perref.innerHTML = percentage;
}

function calculatebmi() {
  const weightref = document.getElementById("weight");
  const heightref = document.getElementById("height");

  const weight = Number(weightref.value);
  const height = Number(heightref.value);

  const bmi = weight / (height * height);
  console.log(bmi);

  const bmoref = document.querySelector("#bmi");
  bmoref.innerHTML = bmi;
}
//Random Number
console.log(Math.random() * 15);
// if we want only number without decimal then we can use math.floor
console.log(Math.floor(Math.random() * 15));
const index = Math.floor(Math.random() * 4);

const name = ["ali", "ahmed", "hassan", "umer"];
console.log(name[index]);

const passvocabulary =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
let password = "";
for (let i = 1; i <= 9; i++) {
  const passIndex = Math.floor(Math.random() * 61);
  password = password + passvocabulary[passIndex];
}

console.log(password);
