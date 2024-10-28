const photos = document.querySelectorAll(".photo");

// Скрываем все фотографии при загрузке страницы
gsap.set(photos, { autoAlpha: 0 });

// Функция для показа фотографии с анимацией
function showPhotos(photos) {
  gsap.to(photos, {
    duration: 0.5,
    autoAlpha: 1,
    stagger: 0.5,
    ease: "power1.out",
  });
}

// Обработчик события на прокрутку страницы
window.addEventListener("scroll", function () {
  photos.forEach((photo) => {
    if (isElementInViewport(photo) && !photo.classList.contains("visible")) {
      photo.classList.add("visible");
      showPhotos(photo);
    }
  });
});

// Функция для проверки, виден ли элемент на экране
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".box",
    start: "top 80%",
    end: "bottom 20%",
    markers: true,
  },
});

tl.from("#leftextra", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
});

tl.from("#rightextra", {
  opacity: 0,
  x: 50,
  duration: 1,
  ease: "power3.out",
});
