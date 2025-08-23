const videoModal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");

videoModal.addEventListener("show.bs.modal", () => {
  videoFrame.src += "?autoplay=1";
});

videoModal.addEventListener("hidden.bs.modal", () => {
  videoFrame.src = videoFrame.src.replace("?autoplay=1", "");
});

// top up button

const backToTopBtn = document.getElementById("backToTopBtn");

// Show button when user scrolls down
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll back to top smoothly
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
