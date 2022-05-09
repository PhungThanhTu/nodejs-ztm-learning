// finally
import fetch from "node-fetch";

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/comments'
]

// Promise.all(urls.map(url => {
//     return fetch(url).then(people => people.json());
// })).then(array => {
//     throw Error;
//     console.log(array);
// })
// .catch(err => console.log(err))
// .finally(()=> console.log("ahaha"));


//for await of
// instead of await chaining
const loopThroughUrls = urls => {
    for(let url of urls){
        console.log(url)
    }
}

const getData2 = async function(urls) {
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises){
        const data = await request.json();
        console.log(data);
    }
} 

getData2(urls);