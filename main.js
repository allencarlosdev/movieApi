let page = 1;
let movies="";
const btnBack=document.getElementById("btnBack");
const btnNext= document.getElementById("btnNext");

btnBack.addEventListener("click",()=>{
    if(page > 1){
        page-=1;
        loadMovies();
    }
})

btnNext.addEventListener("click",()=>{
    if(page < 1000){
        page+=1;
        loadMovies();
    }
})


const loadMovies = async () =>{
    try {
        const answer = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=075de15c494a55554d19428ddc0d8746&page=${page}`);

        if (answer.status === 200) {
            const data = await answer.json();
            data.results.forEach(movie =>{
                movies +=`
                <div class="main__movie">
                    <img class="main__poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">   
                    <h3 class="main__movieTitle">${movie.title}</h3>
                </div>
                `;
            });

            document.getElementById("main").innerHTML= movies;
        }else if(answer.status === 401){
            console.log("You put the key wrong");
        }else if(answer.status === 404){
            console.log("The movie you are looking for is not found");
        }else  {
            console.log("There was an error on our website");
        }

    } catch (error) {
        console.log(error);
    }
}

loadMovies();
