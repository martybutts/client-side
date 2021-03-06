var xhr = require('xhr');
var greeting = require('./views/greeting.hbs');

var endpoint = 'https://api.wheretheiss.at/v1/satellites/25544';

xhr.get(endpoint, function (err, data) {
  if (err) {
    console.error(err);
}
// console.log(data.body)
var data = JSON.parse(data.body); // FYI: data.body is a string
var target = document.getElementsByTagName('main')[0];
  target.innerHTML = greeting({name: data.name, id: 25544, latitude: data.latitude, longitude: data.longitude});
});

// document.getElementById("myBtn").addEventListener("click", displayDate);
//
// function displayDate() {
//     document.getElementById("demo").innerHTML = Date();
// }
