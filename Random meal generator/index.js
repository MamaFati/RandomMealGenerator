let meal = [
  " Hausa Koko and Koose",
  "Tom Brown",
  "Tea/Milo/Coffee",
  "Koko with bread",
  " Rice Water",
  "Beans And fried ripe plantain/rice",
  "Waakye",
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
