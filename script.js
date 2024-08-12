var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");

var check = 0;
btn.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friend";
    istatus.style.color = "#09c509";
    btn.innerHTML = "Remove";
    btn.style.backgroundColor = "#d60707";
    check = 1;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "#d60707";
    btn.innerHTML = "Add Friend";
    btn.style.backgroundColor = "#09c509";
    check = 0;
  }
});
