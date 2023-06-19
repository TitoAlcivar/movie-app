const list = async (url) => { 
    const res = await fetch(url)
    const data = await res.json()
    return data 
    
}
const form = document.querySelector('#movieapp')

form.addEventListener('submit', async (event)  => {
    event.preventDefault();
    const movie = document.querySelector('#cityInput');
    console.log( await (list(`https://api.themoviedb.org/3/search/movie?api_key=fdff2360f3ab6fe1750a9be6ebab1eba&query=${movie.value}`)));
});



