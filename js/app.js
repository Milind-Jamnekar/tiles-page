const images = document.querySelectorAll(".images img");
const heroImage = document.querySelector(".hero-img");
const tiles = document.querySelectorAll(".tile");
const format = document.querySelector(".dimension");
const totalPrice = document.querySelector(".total-price");
const btnContent = document.querySelector(".btn-content");
const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");

const tileData = [
  {
    name: "60x40",
    width: 60,
    height: 40,
  },
  {
    name: "60x30",
    width: 60,
    height: 30,
  },
  {
    name: "40x40",
    width: 40,
    height: 40,
  },
  {
    name: "305x305",
    width: 305,
    height: 305,
  },
];

const resetOpacity = (src) => {
  images.forEach((image) => {
    if (image.src !== src) {
      image.style.opacity = "1";
    }
  });
};

images.forEach((image) => {
  image.addEventListener("click", function () {
    const src = this.getAttribute("src");
    heroImage.src = src;
    this.style.opacity = "0.5";
    resetOpacity(src);
  });
});

const resetBg = (i) => {
  tiles.forEach((tile) => {
    if (tile.dataset.i !== i) {
      tile.style.backgroundColor = "white";
    }
  });
};

const calculatePrice = (width, height) => {
  const price = width * height;
  totalPrice.innerHTML = `${price.toLocaleString("de-DE")} €`;
};

tiles.forEach((tile) => {
  tile.addEventListener("click", function () {
    this.style.backgroundColor = "#e2e2e2";
    const dimension = this.dataset.i;
    resetBg(dimension);
    const width = dimension.split("x")[0];
    const height = dimension.split("x")[1];
    calculatePrice(width, height);
    format.textContent = `Format: ${dimension}x3cm`;
  });
});

function changeContent(e) {
  let msquare = parseFloat(btnContent.textContent);
  if (e.target.classList.contains("increase")) {
    btnContent.textContent = msquare + 1;
  } else if (e.target.classList.contains("decrease") && msquare > 1) {
    btnContent.textContent = msquare - 1;
  }
}

increaseBtn.addEventListener("click", function (e) {
  changeContent(e);
});
decreaseBtn.addEventListener("click", function (e) {
  changeContent(e);
});
