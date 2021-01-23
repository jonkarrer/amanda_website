const fireEvent = evt => {
  const target = evt.target;
  target.style.transform = "rotateX(180deg)";
  target.parentElement.style.color = "black";
  target.firstChild.style.color = "black";
  target.firstChild.style.transform = "rotateX(180deg)";
}
const colorCardsArr = document.querySelectorAll("#colorCards");
colorCardsArr.forEach((item) => item.addEventListener("click", fireEvent, false));

