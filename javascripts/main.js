// _______targets_______
const server = 'https://speed-reader-heroku.herokuapp.com/getstats' // 'http://localhost:4040/getstats' //
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
  analyzingMsg.classList.remove('hidden');
}

const assignStatsToResultsDiv = (data) => {
  resultsDivHeader.innerHTML = nameOfURL.value;
  timeToFirstByte.innerHTML = (data.responseStart - data.requestStart)/1000;
  speedIndex.innerHTML = (data.loadEventEnd - data.navStart)/1000;
  pageSize.innerHTML = data.pageSize/10000000;
}

const showURLInfo = (stats) => {
  console.log(`stats: ${stats}`)
  const data = JSON.parse(stats);
  analyzingMsg.classList.add('hidden');
  resultsDiv.classList.remove('hidden');
  assignStatsToResultsDiv(data);
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
