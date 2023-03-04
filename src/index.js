import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import fetchCountries from './js/fetchCountries';
import { countriesTmpl, countryTmpl } from './js/markupTemplates';
const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countriesList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};

refs.input.addEventListener(
  'input',
  debounce(() => {
    onChangeHandler();
  }, DEBOUNCE_DELAY)
);

function onChangeHandler() {
  const searchQuery = refs.input.value;
  if (searchQuery !== '') {
    refs.countriesList.innerHTML = '';
    refs.countryInfo.innerHTML = '';
    fetchCountries(searchQuery)
      .then(data => markupRes(data))
      .then(string => {
        console.log(string);
        if (string) {
          refs.countriesList.insertAdjacentHTML('beforeend', string);
        }
      });
  }
}

function markupRes(countrysARR) {
  console.log(countrysARR);
  let markup;

  if (!countrysARR) {
    return;
  } else if (countrysARR.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    return;
  } else if (countrysARR.length <= 10 && countrysARR.length >= 2) {
    markup = countrysARR.map(item => countriesTmpl(item)).join('');
    return markup;
  } else if (countrysARR.length < 2) {
    markup = countryTmpl(countrysARR);
    return markup;
  }
}
