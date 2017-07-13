console.log(`this seems to be working`);

// _______targets_______
const server = 'http://localhost:4040/getstats'
const submitForm = document.querySelector('.search-div');
const retry = document.querySelector('.retry-btn');
const resultsDiv = document.querySelector('.results-div');
let nameOfURL = document.querySelector('.url-input');
let resultsDivHeader = document.querySelector('.url-name');
let timeToFirstByte = document.querySelector('.first-byte');
let speedIndex = document.querySelector('.speed-index');
let pageSize = document.querySelector('.page-size');

// ______functions_______
const revealResults = () => {
  console.log(`getting performance stats for ${nameOfURL.value}`);
  resultsDivHeader.innerHTML = nameOfURL.value
  resultsDiv.removeAttribute('hidden');
}

const showURLInfo = (data) => {
  data = JSON.parse(data)
  console.log(typeof data)
  console.log(`data: ${data}`)
  console.log(`data.pageSize: ${data.pageSize}`)
  timeToFirstByte.innerHTML = (data.responseStart - data.requestStart)/1000
  speedIndex.innerHTML = (data.loadEventEnd - data.navStart)/1000
  pageSize.innerHTML = data.pageSize/10000000
}

const requestForPerformanceStats = () => {
  let xhr = new XMLHttpRequest ();
  xhr.open('GET', `${server}/${nameOfURL.value}`);
  xhr.onload = () => showURLInfo(xhr.response);
  xhr.send();
}

// function asyncRequest(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = () => resolve(xhr.responseText);
//     xhr.onerror = () => reject(xhr.statusText);
//     xhr.send();
//   });
// };

// _______events_______
submitForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  requestForPerformanceStats();
  revealResults();
});

retry.addEventListener('click', (evt) => {
  evt.preventDefault();
  requestForPerformanceStats();
});
