/* ================================================= */
/* YEAR */
/* ================================================= */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* ================================================= */
/* SCROLL REVEAL */
/* ================================================= */

const reveals =
  document.querySelectorAll(".reveal");


function revealOnScroll() {

  reveals.forEach((element) => {

    const rect =
      element.getBoundingClientRect();

    if (
      rect.top <
      window.innerHeight - 80
    ) {

      element.style.opacity = "1";

      element.style.transform =
        "translateY(0)";

      element.style.transition =
        "all .6s ease";

    }

  });

}


window.addEventListener(
  "scroll",
  revealOnScroll
);

window.addEventListener(
  "load",
  revealOnScroll
);


/* ================================================= */
/* LIGHTBOX */
/* ================================================= */

const lightbox =
  document.querySelector(".lightbox");

const lightboxImage =
  document.querySelector(".lightbox-img");

const lightboxVideo =
  document.querySelector(".lightbox-video");

const closeButton =
  document.querySelector(".close");


const cards =
  document.querySelectorAll(
    ".portfolio-card"
  );


cards.forEach((card) => {

  card.addEventListener(
    "click",
    () => {

      /* Ignore empty cards */

      if (
        card.classList.contains(
          "empty-card"
        )
      ) {
        return;
      }


      const image =
        card.querySelector("img");

      const video =
        card.querySelector("video");


      /* IMAGE */

      if (image) {

        lightboxImage.src =
          image.src;

        lightboxImage.alt =
          image.alt;

        lightboxImage.style.display =
          "block";

        lightboxVideo.style.display =
          "none";

        lightboxVideo.pause();

        lightbox.style.display =
          "flex";

      }


      /* VIDEO */

      if (video) {

        lightboxVideo.src =
          video.currentSrc ||
          video.src;

        lightboxVideo.style.display =
          "block";

        lightboxImage.style.display =
          "none";

        lightbox.style.display =
          "flex";

        lightboxVideo.currentTime = 0;

        lightboxVideo.play();

      }

    }
  );

});


/* ================================================= */
/* CLOSE LIGHTBOX */
/* ================================================= */

function closeLightbox() {

  lightbox.style.display =
    "none";

  lightboxVideo.pause();

  lightboxVideo.currentTime = 0;

  lightboxImage.src = "";

  lightboxVideo.src = "";

}


closeButton.addEventListener(
  "click",
  closeLightbox
);


/* CLICK OUTSIDE */

lightbox.addEventListener(
  "click",
  (event) => {

    if (
      event.target === lightbox
    ) {

      closeLightbox();

    }

  }
);


/* ESCAPE */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape"
    ) {

      closeLightbox();

    }

  }
);


/* ================================================= */
/* DRAG TO SCROLL */
/* ================================================= */

const sliders =
  document.querySelectorAll(
    ".portfolio-track"
  );


sliders.forEach((slider) => {

  let isDown = false;

  let startX;

  let scrollLeft;


  slider.addEventListener(
    "mousedown",
    (event) => {

      isDown = true;

      slider.style.cursor =
        "grabbing";

      startX =
        event.pageX -
        slider.offsetLeft;

      scrollLeft =
        slider.scrollLeft;

    }
  );


  slider.addEventListener(
    "mouseleave",
    () => {

      isDown = false;

      slider.style.cursor =
        "grab";

    }
  );


  slider.addEventListener(
    "mouseup",
    () => {

      isDown = false;

      slider.style.cursor =
        "grab";

    }
  );


  slider.addEventListener(
    "mousemove",
    (event) => {

      if (!isDown) return;

      event.preventDefault();

      const x =
        event.pageX -
        slider.offsetLeft;

      const walk =
        (x - startX) * 1.5;

      slider.scrollLeft =
        scrollLeft - walk;

    }
  );

});
