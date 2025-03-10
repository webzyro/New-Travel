// Owl Carousel
$(document).ready(function () {
  $(".feature-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
  $(".places-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplayTimeout: 2000,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 2,
        nav: true,
      },
      992: {
        items: 3,
        nav: true,
      },
      1200: {
        items: 4,
        nav: true,
      },
    },
  });
  // Adventure Carousel
  $(".adventure-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Custom Navigation
  $(".adventure-prev").click(function () {
    $(".adventure-carousel").trigger("prev.owl.carousel");
  });

  $(".adventure-next").click(function () {
    $(".adventure-carousel").trigger("next.owl.carousel");
  });
});

// Initialize LightGallery
lightGallery(document.getElementById("lightgallery"), {
  selector: ".gallery-link",
  plugins: [lgZoom],
  speed: 500,
});

// Gallery Filter
document.querySelectorAll(".gallery-filter .btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons
    document.querySelectorAll(".gallery-filter .btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to clicked button
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");

    // Filter gallery items
    document.querySelectorAll(".gallery-item").forEach((item) => {
      if (
        filterValue === "all" ||
        item.getAttribute("data-category") === filterValue
      ) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
