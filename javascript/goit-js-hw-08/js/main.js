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
        <a class="gallery__link" href="${original}">
          <img class="gallery__image"
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

const modWin = {
	state: {
		wrapper: document.querySelector(".js-lightbox"),
		image: document.querySelector(".lightbox__image"),
		closeBtn: document.querySelector(".lightbox__button"),
		closingWrapper: document.querySelector(".lightbox__content"),
		position: 0
	},
	createWindow(src, alt) {
		this.state.position = this.findElement(alt);
		this.openWindow();
		this.createImg(src, alt);
		this.addOnclick();
	},
	openWindow() {
		this.state.wrapper.classList.add("is-open");
	},
	closeWindow() {
		this.state.wrapper.classList.remove("is-open");
		this.clearImg();
	},
	createImg(src, alt) {
		this.state.image.setAttribute(`src`, src);
		this.state.image.setAttribute(`alt`, alt);
	},
	clearImg() {
		this.state.image.setAttribute(`src`, ``);
		this.state.image.setAttribute(`alt`, ``);
	},
	addOnclick() {
		this.state.closeBtn.onclick = () => modWin.closeWindow();
		this.state.closingWrapper.onclick = () => modWin.closeWindow();
	},
	//Функция возвращает текущую позицию элемента в масиве
	findElement(value) {
		return imageArr.findIndex(num => num["description"] === value);
	},
	nextImg() {
		this.clearImg();
		if (this.state.position < imageArr.length - 1) {
			this.state.position += 1;
		} else {
			this.state.position = 0;
		}
		const src = imageArr[this.state.position].original;
		const alt = imageArr[this.state.position].description;
		this.createImg(src, alt);
	},
	prevImg() {
		this.clearImg();
		if (this.state.position > 0) {
			this.state.position -= 1;
		} else {
			this.state.position = imageArr.length - 1;
		}
		const src = imageArr[this.state.position].original;
		const alt = imageArr[this.state.position].description;
		this.createImg(src, alt);
	}
};

//Делегирование события клика по картинке
refs.imageList.addEventListener("click", handleNavClick);

function handleNavClick(event) {
	event.preventDefault();

	const target = event.target;
	//console.log("event target: ", target);

	// Проверяем тип узла, если не ссылка выходим из функции
	if (target.nodeName !== "IMG") return;

	const src = target.dataset.source;
	const alt = target.getAttribute("alt");
	modWin.createWindow(src, alt);
}

window.addEventListener("keydown", function(event) {
	switch (event.which) {
		case 27: //escape
			modWin.closeWindow();
			break;
		case 39: // --->
			modWin.nextImg();
			break;
		case 37: // <---
			modWin.prevImg();
			break;
	}
});
