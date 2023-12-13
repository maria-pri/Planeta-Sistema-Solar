document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

document.querySelector(".btn").addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    window.location.href = "/Sistema/solar.html";
  }
});

document.addEventListener("keydown", function (event) {
  handleArrowKeyPress(event);
});

function handleArrowKeyPress(event) {
  if (event.code === "ArrowLeft") {
    navigate("prev");
  } else if (event.code === "ArrowRight") {
    navigate("next");
  }
}

function navigate(direction) {
  console.log("Navegar para:", direction);

  var prevButton = document.getElementById("prev");
  var nextButton = document.getElementById("next");

  if (direction === "prev") {
    prevButton.click();
  } else if (direction === "next") {
    nextButton.click();
  }
}

var verMaisBtns = document.querySelectorAll(".ver-mais-btn");

verMaisBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var destination = btn.getAttribute("data-href");
    window.location.href = destination;
  });
});
