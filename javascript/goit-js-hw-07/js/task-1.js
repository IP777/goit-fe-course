function task1() {
    const heading = document.createElement("h1");
    console.log(heading); // <h1></h1>

    heading.textContent = "This is a heading";
    console.log(heading); // <h1>This is a heading</h1>

    // ================================================
    const image = document.createElement("img");

    image.setAttribute("src", "https://placeimg.com/640/480/nature");
    image.setAttribute("alt", "this is an image");

    console.log(image); // <img src="https://placeimg.com/640/480/nature" alt="this is an image">
}
