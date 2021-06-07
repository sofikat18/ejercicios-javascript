function animeQuote() {
  fetch('https://animechan.vercel.app/api/random')
    .then((response) => response.json())
    .then((data) => {
      document.getElementById('anime').innerHTML = 'Anime: ' + data.anime;
      document.getElementById('character').innerHTML =
        'Personaje: ' + data.character;
      document.getElementById('quote').innerHTML = 'Cita: ' + data.quote;
    });
}
