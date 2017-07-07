console.log(`this seems to be working`);

// _______targets_______
const submitForm = document.querySelector('.search-div');
const resultsDiv = document.querySelector('.results-div');
let nameOfURL = document.querySelector('.url-input');
let resultsDivHeader = document.querySelector('.url-name');
let siteSpeedNumber = document.querySelector('.site-speed-number')

// ______functions_______
const revealResults = () => {
  console.log(`showing the results for ${nameOfURL.value}`);
  resultsDivHeader.innerHTML = nameOfURL.value
  resultsDiv.removeAttribute('hidden');
}

const showURLInfo = () => {
  const t = this.performance.timing
  let pageLoadDuration = t.loadEventEnd - t.navigationStart;
    // t.responseEnd - t.navigationStart includes DNS timing which does not transfer any data from server to client
  siteSpeedNumber.innerHTML = pageLoadDuration
}

// _______events_______
submitForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  revealResults();

  let requestURLInfo = new XMLHttpRequest ()
  requestURLInfo.addEventListener('load', showURLInfo)
  requestURLInfo.open('GET', nameOfURL.value)
  requestURLInfo.send()
});
