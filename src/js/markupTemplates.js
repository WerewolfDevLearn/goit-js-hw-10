export function countriesTmpl(item) {
  return `<li class="name-container list">
      <img src="${item.flags.svg}" alt="${item.flags.alt}" class="country-falg"/>
      <p class="country-name">${item.name.common}</p>
      </li>`;
}

export function countryTmpl(arr) {
  const item = arr[0];
  console.log(item);
  return `<div class="name-container">
  <img src="${item.flags.svg}" alt="${item.flags.alt}" class="country-falg">
  <p class="country-name">${item.name.official}</p>
    </div>
   <div class="description-container">
    <p class="country-capitol">Capitol: ${item.capital}</p>
    <p class="country-populaation">Population: ${item.population} people</p>
    <p class="country-languages">Languages: ${Object.values(
      item.languages
    ).join(', ')}</p>     
</div>`;
}
