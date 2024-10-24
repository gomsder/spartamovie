const movieContainer = document.querySelector(".movie-container");
const modal = document.querySelector(".modal")

modal.querySelector("h2")
console.log(modal.querySelector("h2").textContent = "안녕하세용가리")

const modalOption = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWM1NmEzNWVmMzg2NWI1YTM0MmE0YWVlZTgxZjEwZCIsIm5iZiI6MTcyOTIzMzU1Ny41Mzc1MTgsInN1YiI6IjY3MGY1MjMwMzNlMTQ3OGY3NjZkYzFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M0NJiBL4zOqf9lkPgYaEc4N4_tVWibkzXOsZafuSJTw',
    },
};

export const getMovieDetail = (movie) => {
    fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=75c56a35ef3865b5a342a4aeee81f10d&language=ko-KR`,
        modalOption
    )
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
            const movies = res;
            const movieTitle = `
                    <div class="movie-card" id="${movie.id}">
                        <img class="movie-image" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="" />
                        <h2>${movie.title}</h2>
                        <p>${movie.overview}</p>
                    </div>
                `
                movieContainer.innerHTML += movieTitle
            // movies.forEach((movie) => {
            //     movieContainer.innerHTML += `
            //         <div class="movie-card" id="${movie.id}">
            //             <img class="movie-image" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="" />
            //             <h2>${movie.title}</h2>
            //             <p>${movie.overview}</p>
            //         </div>
            //     `;
            // });
        })
        .catch((err) => console.error(err));
}