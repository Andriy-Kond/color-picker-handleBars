import colorsArr from "../dataBases/colors.json";

import colorCardTpl from "../templates/myColorCard.hbs";
// console.log("colorCardTpl:::", colorCardTpl(colorsArr[1]));

import colorCardsTpl from "../templates/myColorCards.hbs";
// console.log("colorCardsTpl:::", colorCardsTpl(colorsArr));

const cards = document.querySelector(".js-palette");

// * without handlebars:
// function cardsMarkupCreate(arr) {
//   return arr
//     .map(({ hex, rgb }) => {
//       return `
//       <div class="color-card">
//         <div>
//           <div>
//             <div>
//               <div class="color-swatch" data-hex="${hex}" data-rgb="${rgb}" style="background-color: ${hex}"></div>
//             </div>
//           </div>
//         </div>
//         <div class="color-meta">
//           <p>HEX: ${hex}</p>
//           <p>RGB: ${rgb}</p>
//         </div>
//       </div>
//     `;
//     })
//     .join("");
// }

// * with handlebars - one card (one object in array)
// function cardsMarkupCreate(arr) {
//   // або:
//   // return arr.map(colorCard => colorCardTpl(colorCard)).join("");
//   // або:
//   return arr.map(colorCardTpl).join("");
// }

// * with handlebars - many cards (array of objects)
function cardsMarkupCreate(arr) {
  return colorCardsTpl(arr);
}

const cardsGalleryMarkup = cardsMarkupCreate(colorsArr);
cards.insertAdjacentHTML("beforeend", cardsGalleryMarkup);

cards.addEventListener("click", onClickCard);

function onClickCard(e) {
  const targetEl = e.target;
  if (!targetEl.classList.contains("color-swatch")) {
    return;
  }

  removeActiveClass();
  const parentCard = targetEl.closest(".color-card");
  addActiveClass(parentCard);
  setBgColor(targetEl.dataset.hex);
}

function addActiveClass(card) {
  card.classList.add("is-active");
}

function removeActiveClass() {
  const activeEl = document.querySelector(".is-active");
  if (activeEl) {
    activeEl.classList.remove("is-active");
  }
}

function setBgColor(color) {
  document.body.style.backgroundColor = color;
}
