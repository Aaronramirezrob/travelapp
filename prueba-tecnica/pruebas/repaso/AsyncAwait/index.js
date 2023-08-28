/* 

API_KEY =  "36664ce505c651c0aca5508bcf2aed79",

ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjY2NGNlNTA1YzY1MWMwYWNhNTUwOGJjZjJhZWQ3OSIsInN1YiI6IjY0ZDE1MmVlZDlmNGE2MDNiODc2YWExMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BvZVylu15ekTRgDeZpG3nbUh9vswPKxTLN-4Thm4JiA"

*/

let page = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener("click", () => {
    if(page < 1000) {
        page+= 1;
        loadMovies();
    }

})

btnAnterior.addEventListener("click", () => {
    if(page > 1) {
        page -= 1;
        loadMovies();
    }

})


const loadMovies = async() => {

    try{
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=36664ce505c651c0aca5508bcf2aed79&language=es-ES&page=${page}`);
        console.log(response);

        if(response.status === 200) {
            const data = await response.json();

                let movies = "";

                data.results.forEach(movie => {
                    movies += `
                    <div class="pelicula">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                    </div>
                    <h3 class="titulo">${movie.title}</h3>`;
                });

                document.getElementById("contenedor").innerHTML = movies;

        } else if (response.status === 401){
            console.log("Error on console");

        }  else if (response.status === 404){
            console.log("La película que buscas no existe");

        }  else {
            console.log("Error");
        }

    } catch(err) {
        console.log(err);
    }
}

loadMovies();