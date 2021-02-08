
const mainElement = document.getElementById("portfolio-wrapper");
const imageArr = [
  "./assets/a1.jpg", "./assets/a2.jpg",
  "./assets/b1.jpg", "./assets/b2.jpg",
  "./assets/c1.jpg", "./assets/c2.jpg",
  "./assets/d1.jpg", "./assets/d2.jpg",
  "./assets/e1.jpg", "./assets/e2.jpg",
  "./assets/f1.jpg", "./assets/f2.jpg",
  "./assets/g1.jpg", "./assets/g2.jpg",
  "./assets/h1.jpg", "./assets/h2.jpg",
  "./assets/i1.jpg", "./assets/i2.jpg",
  "./assets/j1.jpg", "./assets/j2.jpg",
  "./assets/k1.jpg", "./assets/k2.jpg",
  "./assets/l1.jpg", "./assets/l2.jpg",
  "./assets/m1.jpg", "./assets/m2.jpg",
  "./assets/n1.jpg", "./assets/n2.jpg",
  "./assets/o1.jpg", "./assets/o2.jpg",
]
function injectImages() {
  for(let i = 0; i < imageArr.length; i += 3) {
    let row = document.createElement("div");
    row.id = "row";
    let image = document.createElement("div");
    image.style.backgroundImage = `url(${imageArr[i]})`
    let imageTwo = document.createElement("div");
    imageTwo.style.backgroundImage = `url(${imageArr[i+1]})`
    let imageTre = document.createElement("div");
    imageTre.style.backgroundImage = `url(${imageArr[i+2]})`
    row.appendChild(image);
    row.appendChild(imageTwo);
    row.appendChild(imageTre);
    mainElement.appendChild(row);
  };
  return;
};
injectImages();