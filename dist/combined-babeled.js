'use strict';

console.log('this seems to be working');

// _______targets_______
var submitForm = document.querySelector('.search-div');
var resultsDiv = document.querySelector('.results-div');
var nameOfURL = document.querySelector('.url-input');
var resultsDivHeader = document.querySelector('.url-name');
var requestURLInfo = new XMLHttpRequest();

// ______functions_______
var revealResults = function revealResults() {
  console.log('showing the results for ' + nameOfURL.value);
  resultsDivHeader.innerHTML = nameOfURL.value;
  resultsDiv.removeAttribute('hidden');
};

var clearInputField = function clearInputField() {
  nameOfURL.value = '';
};

var showURLInfo = function showURLInfo(URLData) {
  console.log('url data: ' + URLData);
};

// _______events_______
submitForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  revealResults();
  requestURLInfo.addEventListener('load', showURLInfo);
  requestURLInfo.open('GET', nameOfURL.value);
  requestURLInfo.send();
});

nameOfURL.addEventListener('click', function () {
  clearInputField();
});

// _______in case we want some jQuery_______
$(document).ready(function () {});
//# sourceMappingURL=combined-babeled.js.map
