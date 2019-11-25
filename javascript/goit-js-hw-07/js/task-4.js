const value = document.querySelector("#value");
let counter = parseInt(value.textContent);
const decrementBtn = document.querySelector("[data-action = decrement]");
const incrementBtn = document.querySelector("[data-action = increment]");

const counterEdit = () => (value.textContent = counter);

const handleClickPlus = () => (counter = counter + 1);

const handleClickMinus = () => (counter = counter - 1);

incrementBtn.addEventListener("click", handleClickPlus);
incrementBtn.addEventListener("click", counterEdit);
decrementBtn.addEventListener("click", handleClickMinus);
decrementBtn.addEventListener("click", counterEdit);

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
