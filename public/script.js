function alertFun() {
  window.alert('This is an alert dialog.');
}

function confirmFun() {
  const result = window.confirm('Do you confirm this action?');
  document.getElementById('result').textContent = `confirm result: ${result}`;
}

function promptFun() {
  const response = window.prompt('What is your name?');
  document.getElementById('result').textContent = `prompt response: ${response}`;
}

// get client data using navigator
console.log(window.navigator.cookieEnabled);
console.log(window.navigator.onLine);
console.log(navigator.appVersion);
console.log(navigator.userAgent);
console.log(navigator.platform);

// get window metadata using window
console.log(window.location.href); // get full url
console.log(window.location.protocol);
console.log(window.location.hostname);

function redirect(url) {
  window.location.assign(url); // redirects the page to another url
}

window.onload = function (event) {
  console.log('Page has loaded');
  // do other javascript stuff here
};

// Global variables declared with var are automatically added to the window object
var bob = 'bob';
const sally = 'sally';

console.log(window.bob === bob); // true
console.log(window.sally === sally); // false

var document = 'hello this is my variable';
console.log(document); // gives the DOM object instead
console.log(window.document === document); // true because declaration ignored

function myFun() {
  window.alert('hello');
}

function myFun2() {
  console.log('myFun2 called');
}

// receives the event parameter from addEventListener callback
function logEventType(event) {
  console.log(event.type);
}

function loaded() {
  console.log('img loaded');
}

const myBtn = document.querySelector('#myBtn');
if (myBtn) {
  // attach myFun2 in addition to myFun to the click event of myBtn
  myBtn.addEventListener('click', myFun2);

  // There are other events such as mouseover and mouseout
  myBtn.addEventListener('mouseover', logEventType); // logs 'mouseover'
  myBtn.addEventListener('mouseout', logEventType); // logs 'mouseout'
}

const cageImg = document.querySelector('#cageImg');
if (cageImg) {
  cageImg.addEventListener('load', loaded);
}