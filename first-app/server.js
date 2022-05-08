import fetch from 'node-fetch'

function movePlayer(num,pos,callback) {
    console.log(`moved ${num} steps to ${pos}`);
    callback();
}

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonpaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp =>resp.json())
})).then(result => {
    console.log(result);
}).catch(()=> console.log("failed"));