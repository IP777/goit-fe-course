import imageArr from "./gallery-items.js";

const imageList = document.querySelector(".js-gallery");

imageList.innerHTML = createImage(imageArr);
//imageList.insertAdjacentHTML("beforeend", imageStr);

function createImage(imgArr) {
    return imgArr.map(imageIter => createTableRowMarkup(imageIter)).join("");
}

function createTableRowMarkup({ preview, original, description }) {
    const img = `
                  <li class="gallery__item">
                  <a
                    class="gallery__link"
                    href="${original}"
                  >
                    <img
                      class="gallery__image"
                      src="${preview}"
                      data-source="${original}"
                      alt="${description}"
                    />
                  </a>
                </li> 
                `;

    return img;
}
