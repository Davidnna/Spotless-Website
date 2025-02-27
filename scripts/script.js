// Select the html elements
const menuIcon = document.getElementById("menu-icon");
const nav_list = document.getElementById("nav_list");
const small = document.querySelectorAll(".small");
const smaller = document.querySelectorAll(".smaller");
const shows = document.querySelector(".shows");
const show_smaller = document.querySelector(".show-smaller");
const faqs = document.querySelectorAll(".faqs h3");

// Toggle navbar visibility when the menu icon is clicked
menuIcon.addEventListener("click", function () {
  if (nav_list.style.display === "flex") {
    nav_list.style.display = "none";
  } else {
    nav_list.style.display = "flex";
  }
});

// On window resize, ensure the navbar is visible on larger screens.
window.addEventListener("resize", function() {
  if (window.innerWidth > 768) {
    nav_list.style.display = "flex";
  } else {
    nav_list.style.display = "none";
  }
});

// Function to toggle display of elements with class "small"
function showSmall() {
    // Determine current display status based on the first element (assuming all are the same)
    const currentlyShown = small.length > 0 && small[0].style.display === "flex";
    small.forEach(element => {
        element.style.display = currentlyShown ? "none" : "flex";
    });
    shows.textContent = currentlyShown ? "Show More" : "Show Less";
}

// On window resize, ensure the ".small" elements are handled appropriately.
window.addEventListener("resize", function() {
    if (window.innerWidth > 709) {
      small.forEach(element => element.style.display = "flex");
      shows.textContent = "Show More";
    } else {
      small.forEach(element => element.style.display = "none");
    }
});

// Function to toggle display of elements with class "smaller"
function showSmaller() {
    // Determine current display status based on the first element (assuming all are the same)
    const isCurrentlyShown = smaller.length > 0 && smaller[0].style.display === "flex";
    smaller.forEach(element => {
        element.style.display = isCurrentlyShown ? "none" : "flex";
    });
    show_smaller.textContent = isCurrentlyShown ? "Show More" : "Show Less";
}

// On window resize, ensure the ".smaller" elements are handled appropriately.
window.addEventListener("resize", function() {
    if (window.innerWidth > 960) {
      smaller.forEach(element => element.style.display = "flex");
      show_smaller.textContent = "Show More";
    } else {
      smaller.forEach(element => element.style.display = "none");
    }
});

// Toggle faqs answer visibility when the question is clicked
faqs.forEach(heading => {
    heading.addEventListener("click", function () {
        this.parentElement.classList.toggle("active");
    });
});

window.addEventListener('scroll', function() {
  const hero = document.getElementById('hero-section');
  const rect = hero.getBoundingClientRect();
  // As the page scrolls, the hero's top position (relative to viewport) changes.
  // By setting the background-position Y value to -rect.top, the background will appear fixed.
  hero.style.backgroundPosition = `center ${-rect.top + 50}px`;
});