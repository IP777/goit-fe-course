const colors = [
	"#FFFFFF",
	"#2196F3",
	"#4CAF50",
	"#FF9800",
	"#009688",
	"#795548"
];

const randomIntegerFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
	startBtn: document.querySelector("[data-action=start]"),
	stopBtn: document.querySelector("[data-action=stop]"),
	body: document.body,
	title: document.querySelector("#js-title")
};
11;
let timerId = null;
let isActive = false;

const handleStartRandomizer = () => {
	if (isActive) {
		return;
	}
	isActive = true;
	refs.title.innerHTML = "Timer started";
	timerId = setInterval(() => {
		refs.body.style.backgroundColor =
			colors[randomIntegerFromInterval(1, 5)];
	}, 1000);
};
const handleStopRandomizer = () => {
	isActive = false;
	refs.body.style.backgroundColor = colors[0];
	refs.title.innerHTML = "Timer stopped";
	clearInterval(timerId);
};

refs.startBtn.addEventListener("click", handleStartRandomizer);
refs.stopBtn.addEventListener("click", handleStopRandomizer);
