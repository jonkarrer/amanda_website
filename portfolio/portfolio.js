
const mainElement = document.getElementById("portfolio-wrapper");
const imageArr = [
  "./hair/a1.jpg", "./hair/a2.jpg",
  "./hair/b1.jpg", "./hair/b2.jpg",
  "./hair/c1.jpg", "./hair/c2.jpg",
  "./hair/d1.jpg", "./hair/d2.jpg",
  "./hair/e1.jpg", "./hair/e2.jpg",
  "./hair/f1.jpg", "./hair/f2.jpg",
  "./hair/g1.jpg", "./hair/g2.jpg",
  "./hair/h1.jpg", "./hair/h2.jpg",
  "./hair/i1.jpg", "./hair/i2.jpg",
  "./hair/j1.jpg", "./hair/j2.jpg",
  "./hair/k1.jpg", "./hair/k2.jpg"
]
function injectImages() {
  for(let i = 0; i < imageArr.length; i += 2) {
    let row = document.createElement("div");
    row.id = "row";
    let image = document.createElement("div");
    image.style.backgroundImage = `url(${imageArr[i]})`
    let imageTwo = document.createElement("div");
    imageTwo.style.backgroundImage = `url(${imageArr[i+1]})`
    row.appendChild(image);
    row.appendChild(imageTwo);
    mainElement.appendChild(row);
  };
};
injectImages();