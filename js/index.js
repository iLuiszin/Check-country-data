document.getElementById('card').style.setProperty('display', 'none', 'important')

function Search() {
document.getElementById('card').style.setProperty('display', 'block', 'important')
  let country = document.getElementById('country').value
  let finalURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`

  fetch(finalURL)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)

      let name = document.getElementById('name')
      let cap = document.getElementById('cap')
      let flag = document.getElementById('flag')
      let cont = document.getElementById('cont')
      let pop = document.getElementById('pop')

      name.innerHTML = country
      cap.innerHTML = data[0].capital[0]
      cont.innerHTML = data[0].continents[0]
      pop.innerHTML = data[0].population
      flag.src = data[0].flags.svg
    })
}
