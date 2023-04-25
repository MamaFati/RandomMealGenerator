let meal = [
  " Ampesi – Boiled Yam, Cocoyam, And Plantain",
  " Jollof Rice",
  "Tuo/Omo Tuo – Rice Balls",
  "Angwa Mo - Ghanaian Fried Rice",
  " Yam Eto(Baayer Eto)",
  "Yele Kakro - Ghanaian yam Balls",
  "Wasawasa",
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
