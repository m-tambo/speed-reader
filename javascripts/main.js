console.log(`this seems to be working`);

// _______targets_______
const server = 'https://url-speed-reader.herokuapp.com/getstats' // 'http://localhost:4040/getstats' //
const submitForm = document.querySelector('.search-div');
const retry = document.querySelector('.retry-btn');
const resultsDiv = document.querySelector('.results-div');
const analyzingMsg = document.querySelector('.analyzing');
let nameOfURL = document.querySelector('.url-input');
let resultsDivHeader = document.querySelector('.url-name');
let timeToFirstByte = document.querySelector('.first-byte');
let speedIndex = document.querySelector('.speed-index');
let pageSize = document.querySelector('.page-size');

// ______functions_______
const analyzingUrl = () => {
  analyzingMsg.classList.remove('hidden')
  console.log(`getting performance stats for ${nameOfURL.value}`);
}

const showURLInfo = (stats) => {
  const data = JSON.parse(stats)
  console.log(`data: ${data}`)
  analyzingMsg.classList.add('hidden')
  resultsDiv.classList.remove('hidden');
  resultsDivHeader.innerHTML = nameOfURL.value
  timeToFirstByte.innerHTML = (data.responseStart - data.requestStart)/1000;
  speedIndex.innerHTML = (data.loadEventEnd - data.navStart)/1000;
  pageSize.innerHTML = data.pageSize/10000000;
}

const requestForPerformanceStats = () => {
  let xhr = new XMLHttpRequest ();
  xhr.open('GET', `${server}/${nameOfURL.value}`);
  xhr.onload = () => showURLInfo(xhr.response);
  xhr.send();
}

// _______events_______
submitForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  analyzingUrl();
  requestForPerformanceStats();
});

retry.addEventListener('click', (evt) => {
  evt.preventDefault();
   resultsDiv.classList.add('hidden');
  analyzingUrl();
  requestForPerformanceStats();
});
