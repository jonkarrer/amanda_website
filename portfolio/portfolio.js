
const mainElement = document.getElementById("portfolio-wrapper");
const imageArr = [
  "./a1.jpg", "./a2.jpg",
  "./b1.jpg", "./b2.jpg",
  "./c1.jpg", "./c2.jpg",
  "./d1.jpg", "./d2.jpg",
  "./e1.jpg", "./e2.jpg",
  "./f1.jpg", "./f2.jpg",
  "./g1.jpg", "./g2.jpg",
  "./h1.jpg", "./h2.jpg",
  "./i1.jpg", "./i2.jpg",
  "./j1.jpg", "./j2.jpg",
  "./k1.jpg", "./k2.jpg",
  "./l1.jpg", "./l2.jpg",
  "./m1.jpg", "./m2.jpg",
  "./n1.jpg", "./n2.jpg",
  "./o1.jpg", "./o2.jpg",
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