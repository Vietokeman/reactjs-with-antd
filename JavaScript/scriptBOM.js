console.log(window);
// function openTab() {
//   window.open("https://www.facebook.com/");
// }
var button = document.querySelector("button");
// button.onclick = openTab();

// console.log(document.querySelector("h2").innerHTML);
// button.onclick = login1();
// function login() {
//   console.log("OK");
// }

// var setCookies = (cname, cvalue, exdays) => {
//   var d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   var expires = "expires" + d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires;
// };
// const login1 = () => {
//   setCookies("email", "vietbmt19@gmail.com", 1);
// };

var setCookies = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;
  // + ";path=/"
};

const login1 = () => {
  setCookies("email", "vietbmt19@gmail.com", 1);
};

// Assign the function reference without invoking it
button.onclick = login1;

button.onclick = login1();
