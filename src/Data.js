const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  const cardHeading = card.querySelector(".card__heading");
  const cardInfo = card.querySelector(".card__info");

  cardInfo.style.transform = `translateY(calc(100% - ${cardHeading.offsetHeight}px))`;

  card.addEventListener("mouseover", () => {
    cardInfo.style.transform = "translateY(0)";
  });

  card.addEventListener("mouseout", () => {
    cardInfo.style.transform = `translateY(calc(100% - ${cardHeading.offsetHeight}px))`;
  });
});
