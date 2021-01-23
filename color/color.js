class ColorCard {
  
  constructor(item) {
    this.element = item.className
  }
  execute() {
    console.log(this.element);
  }
}
const fireEvent = evt => {
  const target = evt.target;
  target.style.transform = "rotateX(180deg)";
  Object.assign(target.firstChild.style,{color:"black",transform:"rotateX(180deg)"});
  target.parentElement.style.color = "black";
  
}
const colorCardsArr = document.querySelectorAll("#id-for-js");
colorCardsArr.forEach((item) => item.addEventListener("click", fireEvent, false));

