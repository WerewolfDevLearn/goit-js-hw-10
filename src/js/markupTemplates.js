export function countriesTmpl(item) {
  return `<li>
      <img src="${item.flags.svg}" alt="${item.flags.alt}" />
      <p>${item.name.official}</p>
      </li>`;

  return markup;
}
export function countryTmpl(arr) {
  const item = arr[0];
  console.log(item);
  return `<h2 class="country-name-header">
  <img src="${item.flags.svg}" alt="${item.flags.alt}">
    ${item.name.official}</h2>
   <div class="description-container">
    <p class="country-capitol">Capitol: ${item.capital}</p>
    <p class="country-populaation">Population: 
       <br>${item.population}</p>
    <p class="country-languages">Languages: ${Object.values(
      item.languages
    ).join(', ')}</p>     
</div>`;
}
