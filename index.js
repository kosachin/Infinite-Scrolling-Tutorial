const container = document.querySelector(".container");
let init = 0;
const loadDivs = () => {
  let i = init;
  while (i < init + 25) {
    const div = document.createElement("div");
    div.textContent = `Div number = ${i}`;
    container.append(div);
    i++;
  }
  init = i;
};
loadDivs();
container.onscroll = () => {
  const last = container.lastChild;
  const dimensions = last.getBoundingClientRect();
  if (dimensions.y < 550) {
    loadDivs();
  }
};
