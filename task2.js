const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: "1",
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: "2",
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: "3",
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: "4",
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

function init() {
  const reviewsElem = document.querySelector(".old-reviews");
  initialData.forEach((element) => {
    const product = document.createElement("div");
    const productName = document.createElement("h1");
    product.appendChild(productName);
    productName.textContent = element.product;
    const productReviews = document.createElement("div");
    product.appendChild(productReviews);
    element.reviews.forEach((review) => {
      const productReview = document.createElement("p");
      productReviews.appendChild(productReview);
      productReview.textContent = review.text;
    });
    reviewsElem.appendChild(product);
  });
}

init();

const message = document.querySelector(".message");
const buttonElem = document.querySelector(".send");

buttonElem.addEventListener("click", function () {
  const titleElems = document.querySelectorAll("h1");
  const titleElemsArray = [];
  titleElems.forEach((element) => {
    titleElemsArray.push(element.textContent);
  });
  console.log(titleElemsArray);
  const productNameElem = document.querySelector(".product");
  const productNewReview = document.querySelector(".review");
  try {
    if (productNewReview.value.length > 50) {
      if (productNewReview.value.length < 300) {
        if (titleElemsArray.includes(productNameElem.value)) {
          const index = titleElemsArray.findIndex(
            (element) => element === productNameElem.value
          );
          const newReview = document.createElement("p");
          titleElems[index].parentNode.lastChild.appendChild(newReview);
          newReview.textContent = productNewReview.value;
        } else {
          const newProduct = document.createElement("div");
          titleElems[0].parentNode.parentNode.appendChild(newProduct);

          const newProductName = document.createElement("h1");
          newProduct.appendChild(newProductName);
          newProductName.textContent = productNameElem.value;

          const newReviews = document.createElement("div");
          newProduct.appendChild(newReviews);

          const newReview = document.createElement("p");
          newReviews.appendChild(newReview);
          newReview.textContent = productNewReview.value;
        }
      } else {
        message.textContent = "Слишком длинный отзыв!";
        throw new Error("Слишком длинный отзыв!");
      }
    } else {
      message.textContent = "Слишком короткий отзыв!";
      throw new Error("Слишком короткий отзыв!");
    }
  } catch (error) {
    console.log(error);
  }
});
