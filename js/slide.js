const carouselItem = document.querySelectorAll('.carrossel-item');
const previousButton = document.querySelector('.carrossel-botao.previous');
const nextButton = document.querySelector('.carrossel-botao.next');

let currentItem = 0;

nextButton.addEventListener('click', handleNextSlide);
previousButton.addEventListener('click', handlePreviousSlide);

function handleNextSlide() {
  const temProximoSlide = currentItem < carouselItem.length - 1;

  if (!temProximoSlide) {
    return;
  }

  nextSlide();

  if (carouselItem[currentItem] === carouselItem[carouselItem.length - 1]) {
    nextButton.setAttribute('disabled', true);
    previousButton.removeAttribute('disabled');
    document.querySelector('.seta-direita').src = "img/arrow-right-black.svg";
  } else {
    nextButton.removeAttribute('disabled');
    previousButton.removeAttribute('disabled');
    document.querySelector('.seta').src = "img/arrow-left-white.svg";
  }
}

function handlePreviousSlide() {
  const temAnteriorSlide = currentItem > 0;

  if (!temAnteriorSlide) {
    return;
  }

  previousSlide();

  if (carouselItem[currentItem] === carouselItem[0]) {
    previousButton.setAttribute('disabled', true);
    nextButton.removeAttribute('disabled');
    document.querySelector('.seta').src = "img/arrow-left.svg";
  } else {
    previousButton.removeAttribute('disabled');
    nextButton.removeAttribute('disabled');
    document.querySelector('.seta-direita').src = "img/arrow-right.svg";
  }

}

function nextSlide() {
  currentItem++;
  carouselItem.forEach((item) => {
    item.classList.remove("ativo");
  });
  carouselItem[currentItem].classList.add('ativo');
  carouselItem[currentItem].scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest"
  });
}

function previousSlide() {
  currentItem--;
  carouselItem.forEach((item) => {
    item.classList.remove("ativo");
  });
  carouselItem[currentItem].classList.add('ativo');
  carouselItem[currentItem].scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest"
  });
}

