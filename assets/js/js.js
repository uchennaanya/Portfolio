const dropdownButton = document.getElementById("dropdownNavbarLink");
const dropdownMenu = document.getElementById("dropdownNavbar");

dropdownButton.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

const callback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fadeIn");
    } else {
      entry.target.classList.remove("animate-fadeIn");
    }
  });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});
