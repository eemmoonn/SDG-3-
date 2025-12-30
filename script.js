document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css" />
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

// Initialize Swiper
const heroSwiper = new Swiper('.heroSwiper', {
  loop: true,            // infinite loop
  slidesPerView: 1,      // one slide at a time
  spaceBetween: 10,      // space between slides in px
  pagination: {
    el: '.swiper-pagination',
    clickable: true,     // dots are clickable
  },
  navigation: {
    nextEl: '.swiper-button-next', // optional arrows
    prevEl: '.swiper-button-prev',
  },
});
