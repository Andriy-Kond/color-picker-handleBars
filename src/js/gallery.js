import countriesArr from "../dataBases/countries.json";

import countriesTpl from "../templates/myCountries.hbs";

const refs = {
  gallery: document.querySelector(".js-gallery"),
};

// * without handlebars:
// const galleryMarkup = countriesArr
//   .map(({ flag, name: countryName, capital, currency, language, population, infected }) => {
//     return `<li class="gallery__item">
//         <div class="gallery__thumb">
//           <img src="${flag}" alt="Флаг" width="320" />
//         </div>
//         <h2>${countryName}</h2>
//         <p><b>Столица: </b> ${capital}</p>
//         <p><b>Валюта:</b>${currency}</p>
//         <p><b>Официальный язык:</b>${language}</p>
//         <p><b>Население:</b> ${population} человек</p>
//         <p style="color: ${infected ? "red" : "green"};"> ${infected ? "Заражені" : "Здорові"}</p>
//       </li>
//       `;
//   })
//   .join("");

// * with handlebars:

const galleryMarkup = countriesTpl(countriesArr);

refs.gallery.insertAdjacentHTML("beforeend", galleryMarkup);
