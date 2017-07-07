console.log(`this seems to be working`);

// _______targets_______
const submitForm = document.querySelector('.search-div');
const resultsDiv = document.querySelector('.results-div');
let nameOfURL = document.querySelector('.url-input');
let resultsDivHeader = document.querySelector('.url-name');
let requestURLInfo = new XMLHttpRequest ()

// ______functions_______
const revealResults = () => {
  console.log(`showing the results for ${nameOfURL.value}`);
  resultsDivHeader.innerHTML = nameOfURL.value
  resultsDiv.removeAttribute('hidden');
}

const clearInputField = () => {
  nameOfURL.value = ''
}

const showURLInfo = (URLData) => {
  console.log(`url data: ${URLData}`)
}

// _______events_______
submitForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  revealResults();
  requestURLInfo.addEventListener('load', showURLInfo)
  requestURLInfo.open('GET', nameOfURL.value)
  requestURLInfo.send()
});

nameOfURL.addEventListener('click', () => {
  clearInputField()
})


// _______in case we want some jQuery_______
$( document ).ready( () => {

});
