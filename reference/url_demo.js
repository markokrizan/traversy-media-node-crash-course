//Url module example usage:

const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

//Serialized url:

console.log(myUrl.href);
console.log(myUrl.toString());

//Host

console.log(myUrl.host);

//Hostname: - doesent have the port

console.log(myUrl.hostname);

//Pathname

console.log(myUrl.pathname);

//Serialized query:

console.log('search');

//Param object - object {key(url param name) : value (url param value)}:

console.log(myUrl.searchParams);

//Add param

myUrl.searchParams.append('abc', 123);
console.log(myUrl.searchParams);

//Loop through params:
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name} : ${value}`);
})

