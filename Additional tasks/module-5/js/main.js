const filmObj = {
	popularity: 404.293,
	vote_count: 5450,
	video: false,
	poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
	id: 475557,
	adult: false,
	backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
	original_language: "en",
	original_title: "Joker",

	title: "Joker",
	vote_average: 8.4,
	overview:
		"During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
	release_date: "2019-10-02"
};

class Film {
	constructor({ title, vote_average, overview, release_date }) {
		this._title = title;
		this.vote_average = vote_average;
		this.overview = overview;
		this.release_date = release_date;
	}

	showRating() {
		console.log(`vote_average: ${this.vote_average}`);
	}

	showTitle() {
		console.log(`title: ${this._title}`);
	}

	showOveriew() {
		return `overview: ${this.overview}`;
	}

	newTitle() {
		this._title = this._title + " the best film!";
	}

	showJener() {
		console.log(`jener: ${this.jener}`);
	}

	showDuration() {
		console.log(this.duration);
	}
}

class Sitcom extends Film {
	constructor(filmObject) {
		super(filmObject);
		this.jener = `Sitcom`;
		this.duration = 10;
	}
}

// const newFilm = new Film(filmObj);

// newFilm.showTitle();
// newFilm.showRating();
// newFilm.newTitle();
// newFilm.showTitle();
// console.log (newFilm.showOveriew());

const newFilm = new Sitcom(filmObj);

newFilm.showTitle();
newFilm.showJener();

newFilm.showDuration();

/*
try{

}catch{

}
*/

window.addEventListener(
	"scroll",
	_.throttle(() => {
		console.log("Scroll event handler invocation every 300ms.");
	}, 300)
);
