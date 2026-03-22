

const element = document.getElementById("typing");
const text = "Hello, I'm DICKSON NYABATE!";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        element.innerHTML +=text.charAt(i);
        i++;
        setTimeout(typeWriter, 150); // speed of typing
    }
}
//battery//
navigator.getBattery().then(function(battery) {
    function updateBattery() {
        let level = Math.floor(battery.level * 100);
        document.getElementById("battery-level").textContent = level + "%";
    }

    updateBattery();

    battery.addEventListener("levelchange", updateBattery);
});


typeWriter();

const elements = document.querySelectorAll("section");
const items = document.querySelectorAll(".skill, .tool");

items.forEach(item => {
  item.addEventListener("click", () => {

    // close others
    items.forEach(i => i.classList.remove("active"));

    // open clicked
    item.classList.toggle("active");
  });
});


window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});