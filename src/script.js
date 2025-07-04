window.addEventListener("load", (event) => {
  const burger = document.getElementById("burger"),
    menu = document.getElementById("menu"),
    body = document.querySelector("body");

  burger.addEventListener("click", () => {
    burger.classList.toggle("open");
    menu.classList.toggle("active");
    body.classList.toggle("overflow-hidden");
  });

  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: 3, // 👈 Show 3 slides at once
    //   spaceBetween: 10,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },

      768: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 7,
      },
    },
    autoplay: {
      delay: 2500,
    },
    freeModeMomentum: false, // prevents acceleration/deceleration
    allowTouchMove: false,
    simulateTouch: false,
  });
  console.log("page is fully loaded");

  const switcher = document.getElementById('switcher');
  const buttons = Array.from(switcher.querySelectorAll('a'));
  const priceSpans = document.querySelectorAll('.price');
  const periodSpans = document.querySelectorAll('.period');   // ✱ new
  const periodText = { monthly: 'month', yearly: 'year' };   // ✱ new

  const applyInterval = (interval) => {
    /* highlight the active button */
    buttons.forEach(btn =>
      btn.classList.toggle('active', btn.dataset.interval === interval)
    );

    /* update every price */
    priceSpans.forEach(span => {
      span.textContent = `$${span.dataset[interval]}`;
    });

    /* update every “/month | /year” */
    periodSpans.forEach(span => {
      span.textContent = `/${periodText[interval]}`;
    });
  };

  /* initialise buttons */
  buttons.forEach(btn => {
    btn.dataset.interval = btn.textContent.trim().toLowerCase();
    btn.addEventListener('click', e => {
      e.preventDefault();
      applyInterval(btn.dataset.interval);
    });
  });

  const items = document.querySelectorAll('.faq-item');
  let current = null;                                      // tracks the open item

  items.forEach(item => {
    const question = item.querySelector('.question');

    // guard – if someone removed .question in HTML, skip
    if (!question) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // 1) close the one that is currently open (if it’s not the same)
      if (current && current !== item) {
        current.classList.remove('open');
      }

      // 2) toggle the clicked item
      item.classList.toggle('open', !isOpen);

      // 3) update tracker
      current = (!isOpen) ? item : null;
    });
  });

  /* optional – ensure everything starts closed on load */
  window.addEventListener('DOMContentLoaded', () => {
    items.forEach(item => item.classList.remove('open'));
    current = null;
  });
});
