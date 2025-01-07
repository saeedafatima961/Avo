// Hamburger menu toggle
// const hamburger = document.getElementById('hamburger');
// const menu = document.getElementById('menu');

// hamburger.addEventListener('click', () => {
//   menu.classList.toggle('active');
// });

// Navbar scroll effect
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const counterElement = document.getElementById("counter");
  const target = 400;
  let count = 0;

  const updateCounter = () => {
    if (count < target) {
      count++;
      counterElement.textContent = count;
      setTimeout(updateCounter, 5);
    }
  };

  updateCounter();
});
