
    const mainElement = document.getElementById("portfolio-wrapper");
    const imageArr = [
      "../assets/haira1.jpg", "../assets/haira2.jpg",
      "../assets/hairb1.jpg", "../assets/hairb2.jpg",
      "../assets/hairc1.jpg", "../assets/hairc2.jpg",
      "../assets/haird1.jpg", "../assets/haird2.jpg",
      "../assets/haire1.jpg", "../assets/haire2.jpg",
      "../assets/hairf1.jpg", "../assets/hairf2.jpg",
      "../assets/hairg1.jpg", "../assets/hairg2.jpg",
      "../assets/hairh1.jpg", "../assets/hairh2.jpg",
      "../assets/hairi1.jpg", "../assets/hairi2.jpg",
      "../assets/hairj1.jpg", "../assets/hairj2.jpg",
      "../assets/hairk1.jpg", "../assets/hairk2.jpg"
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