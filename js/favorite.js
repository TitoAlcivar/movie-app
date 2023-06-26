const div = document.querySelector('.favorites')

const local = JSON.parse(localStorage.getItem('movies')) || []

local.forEach(element => {
    div.innerHTML += `<div class = "info">
                           <a href = "./pages/movie.html?id=${element.id}">
                           <img src = "https://image.tmdb.org/t/p/w500/${element.poster_path}" alt="">
                           </a>
                           <p>${element.original_title}</p>
                           <p>${element.release_date}</p>
                           <button class ="favorite">Favorite</button>
                          </div>`
    
});