const request = require("request");

const breed = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error) {
    return console.log("ERROR");
  }
  const data = JSON.parse(body);
  if (data[0] !== undefined) {
    console.log(data);
  } else {
    console.log("ERROR: BREED NOT FOUND");
  }
});