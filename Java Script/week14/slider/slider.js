let i = 0;
let images = [];

images[0] = "loft_1.jpg";
images[1] = "loft_2.jpg";
images[2] = "loft_3.jpg";
images[3] = "loft_4.jpg";
images[4] = "loft_5.jpg";

function changeImgAfter() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

function changeImgBefore() {
  document.slide.src = images[i];
  if (i > images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
document.querySelector("img").innerHTML = changeImgAfter();
