document.addEventListener("click", (ev) => {
  const targetEl = ev.target;
  const targetElClas = Array.from(targetEl.classList);

  if (targetElClas.includes("start")) display("#screen");
  if (targetElClas.includes("instruction")) display("#welcome");
  if (targetElClas.includes("back")) display(previousSection);
});

const findEl = (ele) => document.querySelector(`${ele}`);
let currentSection = "#home";
let previousSection;

const display = (section) => {
  toggle(findEl(currentSection), "hidden");
  toggle(findEl(section), "hidden");
  previousSection = currentSection;
  currentSection = section;
};

const toggle = (ele, clas) => ele.classList.toggle(clas);
