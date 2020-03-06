const moodBtn = document.querySelector(".mood-btn");
const menuBtn = document.querySelector(".menu-btn");
const box = document.querySelector(".movement .span");
const body = document.body;
const boxCount = 160;

moodBtn.addEventListener("click", () => {
  body.classList.toggle("active");
});

menuBtn.addEventListener("click", () => {
  body.classList.toggle("menu-open");
});

for (i = 0; i < boxCount; i++) {
  let movementBox = document.querySelector(".movement");
  let neuBox = document.createElement("span");
  movementBox.appendChild(neuBox);
}

for (i = 0; i < boxCount; i++) {
  setTimeout(function() {
    $(".movement span").each(function(i) {
      var row = $(this);
      setTimeout(function() {
        row.addClass("pop");
      }, 100 * i);
      setTimeout(function() {
        row.removeClass("pop");
      }, 140 * i);
    });
  }, 22000 * i);
}

