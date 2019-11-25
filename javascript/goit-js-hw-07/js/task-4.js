const value = document.querySelector("#value");
let counter = 0;
const decrementBtn = document.querySelector("[data-action = decrement]");
const incrementBtn = document.querySelector("[data-action = increment]");

const counterEdit = () => (value.textContent = counter);

const handleClickPlus = () => {
    counter += 1;
    counterEdit();
};

const handleClickMinus = () => {
    counter -= 1;
    counterEdit();
};

incrementBtn.addEventListener("click", handleClickPlus);
decrementBtn.addEventListener("click", handleClickMinus);

// const refs = {
// 	counter: document.querySelector("#counter"),
// 	value: document.querySelector("#value")
// };

// const actions = {
// 	state: {
// 		value: 0
// 	},
// 	decrement() {
// 		this.state.value -= 1;
// 	},
// 	increment() {
// 		this.state.value += 1;
// 	}
// };

// const changeValue = ({ target }) => {
// 	actions[target.dataset.action]();
// 	refs.value.textContent = actions.state.value;
// };

// refs.counter.addEventListener("click", changeValue);
