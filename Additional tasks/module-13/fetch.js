const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));

const getPost = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
};
getPost();

function* createGenerator() {
    const response = yield fetch(url);
    const data = yield response.json();
    console.log(data);
}

const async = () => {
    const generator = createGenerator();

    function next(value) {
        const nextResult = generator.next(value);
        if (nextResult.done) {
            return nextResult.value;
        }
        nextResult.value.then(next);
    }
    next();
};

async();
