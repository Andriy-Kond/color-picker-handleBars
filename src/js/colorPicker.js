import colors from "../dataBases/colors.json";

const cards = document.querySelector(".js-palette");

function cardsMarkupCreate(cards) {
  return cards
    .map(({ hex, rgb }) => {
      return `
      <div class="color-card">
        <div>
          <div>
            <div>
              <div class="color-swatch" data-hex="${hex}" data-rgb="${rgb}" style="background-color: ${hex}"></div>
            </div>
          </div>
        </div>
        <div class="color-meta">
          <p>HEX: ${hex}</p>
          <p>RGB: ${rgb}</p>
        </div>
      </div>
    `;
    })
    .join("");
}

const cardsGalleryMarkup = cardsMarkupCreate(colors);
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
