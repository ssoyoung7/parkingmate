AOS.init();

// 숫자카운트
const counter = (counterElement, max) => {
  let now = max;

  const handle = setInterval(() => {
    counterElement.innerHTML = Math.ceil(max - now).toLocaleString();

    if (now < 1) {
      clearInterval(handle);
    }

    const step = now / 10;
    now -= step;
  }, 50);
};

// 스크롤 이벤트
const startCountersOnScroll = () => {
  const numSec = document.querySelector(".sec3");
  const numSecOffsetTop = numSec.offsetTop;
  let started = false;

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY >= numSecOffsetTop && !started) {
      const counters = document.querySelectorAll(".count");
      const maxValues = [1280, 95, 18312];
      counters.forEach((counterElement, index) => {
        setTimeout(() => counter(counterElement, maxValues[index]), 0);
      });
      started = true;
      window.removeEventListener("scroll", handleScroll);
    }
  };

  window.addEventListener("scroll", handleScroll);
};

window.addEventListener("load", startCountersOnScroll);
