const navContainer = document.querySelector(".nav");

const createNewImage = () => {
	const htmlContainer = `
    <li class="item">
		<a href="#">
			<img
			src="https://cdn.pixabay.com/photo/2016/10/10/16/48/dragonfly-1729157_1280.jpg"
			alt="Load.."
			class="img_item"
			/>
		</a>
	</li>`;

	navContainer.insertAdjacentHTML("beforeend", htmlContainer);
};
//--------------------------------------
const onEntry = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			createNewImage();
			console.log(entry.target);
			observer.unobserve(entry.target);
		}
	});
};

const options = {
	rootMargin: "50px 0px",
	treshholder: 0.6
};

//const images = document.querySelectorAll(".img_item");
const imag = document.querySelector(".img_item");
const observer = new IntersectionObserver(onEntry, options);

observer.observe(imag);
// images.forEach(image => {
// 	observer.observe(image);
// });
