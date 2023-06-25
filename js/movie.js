const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const card = document.querySelector('.card')
console.log(card);


const infoMovie = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=fdff2360f3ab6fe1750a9be6ebab1eba`);
    const response = await data.json()
    console.log(response);
    const body = document.querySelector('body');
    body.style.backgroundImage = `url('https://image.tmdb.org/t/p/w500/${response.poster_path}')`

    card.innerHTML += `<div class = "data">
                       <img src = "https://image.tmdb.org/t/p/w500/${response.poster_path}" alt="">
                       <p>${response.original_title}</p>
                       <p>Fecha: ${response.release_date}</p>
                       <p>Minutos: ${response.runtime}</p>
                       <p>Director:
                       <p>Sinopsis: ${response.overview}</p>`

}
infoMovie()
