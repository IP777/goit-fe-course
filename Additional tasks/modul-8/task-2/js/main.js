const sidebarImage = document.querySelector(".sidebar_img");
const sidebarNavPreview = document.querySelector(".nav");
const imageCollectWrapper = document.querySelector(".image_collect");

const createNavItems = (imageSrc, imageId) => {
	const htmlContainer = `
    <a href="#${imageId}">
        <li>
            <img
            src="${imageSrc}"
            alt=""
            class="sidebar_item_image"
            />
        </li>
    </a>`;

	sidebarNavPreview.insertAdjacentHTML("beforeend", htmlContainer);
};

const createImageItems = () => {
	const htmlContainer = `
    <li class="data_li">
		<img
			src="https://cdn.pixabay.com/photo/2016/10/10/16/48/dragonfly-1729157_1280.jpg"
			alt="Dragonfly, Dew, Spider Web, Morning"
			data-prev="https://cdn.pixabay.com/photo/2016/10/10/16/48/dragonfly-1729157__340.jpg"
			class="data_img"
			id="img-1"
			/>
	</li>`;

	imageCollectWrapper.insertAdjacentHTML("beforeend", htmlContainer);
};

const onEntry = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const getAttr = entry.target.getAttribute("src");
			const getId = entry.target.getAttribute("id");
			console.log(getAttr);

			sidebarImage.setAttribute("src", getAttr);

			createNavItems(getAttr, getId);
			createImageItems();

			observer.unobserve(entry.target);
		}
	});
};

const options = {
	//rootMargin: "50px 0px",
	treshholder: 0.6
};

const images = document.querySelectorAll(".data_img");
const observer = new IntersectionObserver(onEntry, options);

images.forEach(image => {
	observer.observe(image);
});
