// _______targets_______
const server = 'https://speed-reader-heroku.herokuapp.com';
const submitForm = document.querySelector('.search-div');
const retry = document.querySelector('.retry-btn');
const resultsDiv = document.querySelector('.results-div');
const analyzingMsg = document.querySelector('.analyzing');
const nameOfURL = document.querySelector('.url-input');
const screenshot = document.querySelector('.url-screenshot');
let resultsDivHeader = document.querySelector('.url-name');
let timeToFirstByte = document.querySelector('.first-byte');
let speedIndex = document.querySelector('.speed-index');
let pageSize = document.querySelector('.page-size');

// ______functions_______
const assignStatsToResultsDiv = (data) => {
  resultsDivHeader.innerHTML = nameOfURL.value;
  timeToFirstByte.innerHTML = (data.responseStart - data.requestStart)/1000;
  speedIndex.innerHTML = (data.loadEventEnd - data.navStart)/1000;
  pageSize.innerHTML = data.pageSize/10000000;
}

const showURLInfo = (stats) => {
  console.log(`stats: ${stats}`);
  const data = JSON.parse(stats);
  analyzingMsg.classList.add('hidden');
  resultsDiv.classList.remove('hidden');
  assignStatsToResultsDiv(data);
}

const requestForPerformanceStats = () => {
  let xhr = new XMLHttpRequest ();
  xhr.open('GET', `${server}/getstats/${nameOfURL.value}`);
  xhr.onload = () => showURLInfo(xhr.response);
  xhr.send();
}

const initiateUrlAnalysis = (evt) => {
  evt.preventDefault();
  resultsDiv.classList.add('hidden');
  analyzingMsg.classList.remove('hidden');
  screenshot.src=`${server}/getscreenshot/${nameOfURL.value}`
  requestForPerformanceStats();
}

// _______events_______
submitForm.addEventListener('submit', (evt) => initiateUrlAnalysis(evt));

retry.addEventListener('click', (evt) => initiateUrlAnalysis(evt));
