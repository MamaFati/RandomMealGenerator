let meal = [
  " Kelewele",
  " Fufu and goat light soup",
  "Kenkey and fried fish",
  " Banku with Soup and Seafood",
  " Rice Balls (Omotuo) with Peanut Butter Soup",
  "Etor (Mashed Yam with Eggs)",
  " Yam Pottage",
  " Tuo Zaafi",
  " Tubaani (Bean Pudding)",
  " Yam Fries and Octopus"
];
let btn = document.getElementById("btn");
let serve = document.getElementById("serve");
btn.addEventListener("click", function () {
  let random = getRandom();
  //   document.body.style.backgroundColor = color[random];
  serve.textContent = meal[random];
});
function getRandom() {
  return Math.floor(Math.random() * meal.length);
}
