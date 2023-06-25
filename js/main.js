const form = document.querySelector('#movieapp')
const card = document.querySelector('#movie')

const getData = async (url) => {
    const data = await fetch(url)
    const response = await data.json()
    return response
}


const moviePopular = async () => {
    const data = await getData('https://api.themoviedb.org/3/movie/popular?api_key=fdff2360f3ab6fe1750a9be6ebab1eba');
    print(data.results)
}
moviePopular()

form.addEventListener('submit', async (event) => {

    event.preventDefault();
    const input = document.querySelector('#id').value
    Api(input)
 
})

const Api = async (input) => {
    card.innerHTML = ''
    const data = await getData(`https://api.themoviedb.org/3/search/movie?api_key=fdff2360f3ab6fe1750a9be6ebab1eba&query=${input}`)
    console.log(data.results);
    print(data.results)

}

const print = (movies) => {

    movies.forEach(element => {
5
        card.innerHTML += `
                           <div class = "info">
                           <a href = "./pages/movie.html?id=${element.id}">
                           <img src = "https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="">
                           </a>
                           <p>${element.original_title}</p>
                           <p>${element.release_date}</p>
                           <button class = "favorite">
                           <img src="img/pngtree-vector-star-icon-png-image_4187383.jpg" alt="Texto alternativo">
                           </button>
                          </div>`

    })
};

