const form = document.querySelector('#movieapp')
const card = document.querySelector('#movie')

form.addEventListener('submit', async (event) => {
    event.preventDefault(); 
    const input = document.querySelector('#id')
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=fdff2360f3ab6fe1750a9be6ebab1eba&query=${input.value}`)
    const res = await data.json()
    console.log(res.results);

    
    res.results.forEach(element => {
        card.innerHTML += `<a hrfe>
                            <div class = "info">
                           <img src = "https://api.themoviedb.org/t/p/w500${element.poster_path} alt="">
                           <p>${element.original_title}</p>
                           <p>${element.release_date}</p>
                           <button class = "favorite">Favorite</button>
                            </div></a>
                           `
    });

})

   


