const lazyLoadAction = {
	state: {
		images: document.querySelectorAll(".gallery__image")
	},
	create() {
		this.state.images.forEach(image => {
			this.lazyLoad(image);
		});
	},
	lazyLoad(target) {
		const option = {
			rootMargin: "50px 0px",
			treshholder: 0.01
		};

		const io = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const img = entry.target;
					const imageUrl = img.dataset.lazy;

					img.setAttribute("src", imageUrl);
					img.classList.add("fade-in");

					observer.disconnect();
				}
			});
		}, option);

		io.observe(target);
	}
};

lazyLoadAction.create();

/*
const lazyLoad = target => {
	const option = {
		rootMargin: "50px 0px",
		treshholder: 0.01
	};

	const io = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const img = entry.target;
				const imageUrl = img.dataset.lazy;

				img.setAttribute("src", imageUrl);
				img.classList.add("fade-in");

				observer.disconnect();
			}
		});
	}, option);

	io.observe(target);
};

const images = document.querySelectorAll(".gallery__image");
images.forEach(image => {
	lazyLoad(image);
});
*/
