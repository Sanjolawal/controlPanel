const sign = document.querySelector(`.sign`);
const create = document.querySelector(`.create`);
const forget = document.querySelector(`.forget`);
const container = document.querySelector(`.container`);
const container2 = document.querySelector(`.container2`);
const container3 = document.querySelector(`.container3`);

sign.addEventListener(`click`, () => {
  container.style.display = `none`;
  container2.style.display = `grid`;
});
create.addEventListener(`click`, () => {
  container2.style.display = `none`;
  container.style.display = `grid`;
});
forget.addEventListener(`click`, () => {
  container2.style.display = `none`;
  container.style.display = `none`;
  container3.style.display = `grid`;
});
