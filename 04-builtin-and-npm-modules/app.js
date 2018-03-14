var _ = require("lodash");
var axios = require("axios");

console.log(_.snakeCase("someValue"));

axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    var glenna = _.find(res.data, {name:"Glenna Reichert"});
    console.log(glenna);
});