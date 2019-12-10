const pool = document.getElementById("pool");
const el = document.getElementById("person");

const elHendlerOver = e => {
	el.hidden = false;
	e.target.onmousemove = elHendlerMove;
};

const elHendlerOut = e => {
	el.hidden = true;
	e.target.onmousemove = elHendlerMove;
};

const elHendlerMove = e => {
	el.style.top = e.clientY + "px";
	el.style.left = e.clientX + "px";
	el.textContent = `Position X: ${e.clientX}
                      Position Y:${e.clientY} `;
};

pool.addEventListener("mouseover", elHendlerOver);
pool.addEventListener("mouseout", elHendlerOut);
