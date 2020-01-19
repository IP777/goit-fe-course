const date = new Date();
console.log("date", date);
console.log("date", date.getTime());

const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
};
const localeUk = date.toLocaleString("Uk-uk", options);
console.log(localeUk);

//-----------------------------------------------------
