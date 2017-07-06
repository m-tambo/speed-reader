'use strict';

console.log('this seems to be working');

// _______targets_______
var submitForm = document.querySelector('.search-div');
var resultsDiv = document.querySelector('.results-div');
var nameOfURL = document.querySelector('.url-input');
var resultsDivHeader = document.querySelector('.url-name');

// ______functions_______
var revealResults = function revealResults() {
  console.log('revealing the results for ' + nameOfURL.value);
  resultsDivHeader.innerHTML = nameOfURL.value;
  resultsDiv.removeAttribute('hidden');
};

var clearInputField = function clearInputField() {
  nameOfURL.value = '';
};

// _______events_______
submitForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  revealResults();
});

nameOfURL.addEventListener('click', function () {
  clearInputField();
});

// _______in case we want some jQuery_______
$(document).ready(function () {});
//# sourceMappingURL=combined-babeled.js.map
