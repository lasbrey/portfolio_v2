const audio = new Audio("sound/preload.wav");

//toggle between playing and pausing on button click
const playBtn = document.querySelector(".controls");
playBtn.addEventListener(
  "click",
  () => {
    if (audio.paused) {
      audio.play();
      audio.autoplay = true;
    } else {
      audio.pause();
    }
  },
  false
);

window.addEventListener("load", function () {
  document.querySelectorAll("[toggleElement]").forEach((toggle) => {
    toggle.addEventListener("click", function (event) {
      console.log(toggle);
      const answerElement = toggle.querySelector("[answer]");
      const caretElement = toggle.querySelector("img");
      console.log(answerElement);
      if (answerElement.classList.contains("hidden")) {
        answerElement.classList.remove("hidden");
        caretElement.classList.add("rotate-90");
      } else {
        answerElement.classList.add("hidden");
        caretElement.classList.remove("rotate-90");
      }
    });
  });
});
