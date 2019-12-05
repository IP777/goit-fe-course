const pool = document.getElementById("pool");
const el = document.getElementById("person");

const elHendler = e => {
    el.style.top = e.clientY + "px";
    el.style.left = e.clientX + "px";
};

pool.addEventListener("click", elHendler);
//console.log(pool, el);
