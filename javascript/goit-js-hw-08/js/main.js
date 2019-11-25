import imageArr from "./gallery-items.js";

const refs = {
    imageList: document.querySelector(".js-gallery")
};

const galleryAction = {
    createImage(imgArr) {
        return imgArr
            .map(imageIter => this.createTableRowMarkup(imageIter))
            .join("");
    },
    createTableRowMarkup({ preview, original, description }) {
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
};

refs.imageList.innerHTML = galleryAction.createImage(imageArr);
//imageList.insertAdjacentHTML("beforeend", imageStr);
