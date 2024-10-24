import { getMovieDetail } from "./movies_modal.js";
const $movieContainer = document.querySelector('.movie-container');
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWM1NmEzNWVmMzg2NWI1YTM0MmE0YWVlZTgxZjEwZCIsIm5iZiI6MTcyOTIzMzU1Ny41Mzc1MTgsInN1YiI6IjY3MGY1MjMwMzNlMTQ3OGY3NjZkYzFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M0NJiBL4zOqf9lkPgYaEc4N4_tVWibkzXOsZafuSJTw'
    }
};
const mainBtn = document.querySelector(".main2")



const displayMovies = (moviesData, element) => { 
    if (moviesData && moviesData.results.length > 0) {
        // onclick 이벤트 
        // 영화 포스터를 클릭 했을 때 영화 상세 정보를 불러오는 함수를 실행 시켜야함.
        // 영화 포스터 불러오는 함수  ex_) getMovieDetail()
        // 클릭 이벤트 일어났을 때에 아래 함수가 실행
        // getMovieDetail(movieId)
        try {
            moviesData.results.forEach((movie) => {
                const divEl = document.createElement("div");
                const movieItem = `
                    <div id="divAll">
                        <img src="https://image.tmdb.org/t/p/w300${movie.backdrop_path}"  alt="${movie.title}" class="movieImg"  />
                        <div>
                            <h3 class="movieTitle">${movie.title}</h3>
                            <p class="movieData"> 개봉 : ${movie.release_date}</p>
                            <p class="movieOverview">${movie.overview ? movie.overview : "설명이 없습니다."}</p>
                        </div>
                    </div>`
                    ;
                divEl.innerHTML = movieItem;
                // console.log(element)
                divEl.addEventListener("click", async  () => {
                    await getMovieDetail(movie);
                })
                // 1. 클릭 이벤트 만들기.
                // 2. 이 클릭 이벤트에서 getMovieDetail함수 실행시키고 movie값 전달하기.
                element.append(divEl);
            });
        } catch (error) {
            console.log(error);
        }
    }
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1', options)
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        displayMovies(response, $movieContainer)
        })
    // .then((response) => displayMovies(response, $movieContainer));

const displaySearchMovies = async (title) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=ko&page=1`, options)
    const data = await response.json()
    $movieContainer.innerHTML = ""
    data.results.forEach(movie => {
        const divEl = document.createElement('div')
        const movieItem = `
    <div id="divAll">
        <img src="https://image.tmdb.org/t/p/w300${movie.backdrop_path}"  alt="${movie.title}" class="movieImg"  />
        <div>
            <h3 class="movieTitle">${movie.title}</h3>
            <p class="movieData"> 개봉 : ${movie.release_date}</p>
            <p class="movieOverview">${movie.overview ? movie.overview : "설명이 없습니다."}</p>
        </div>
    </div>`
            ;

        divEl.innerHTML = movieItem
        $movieContainer.append(divEl)
    })
}

const inputEl = document.querySelector('#searchInput');

inputEl.addEventListener('keydown', (e) => {
    const searchValue = e.target.value.toLowerCase().trim();
    if (e.key === 'Enter') {
        displaySearchMovies(searchValue)
    };
    if (searchValue === "") {
        $movieContainer.innerHTML = ""
        fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko&page=1', options)
            .then((response) => response.json())
            .then((response) => displayMovies(response, $movieContainer));
    }
});

mainBtn.addEventListener("click", (e) => {
return $movieContainer
});

function solution(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            sum = sum + i
        }
    }
    return sum
};




// const containerEl = document.querySelector(".bookMark-container");

// movies.forEach((movie) => {
//     const divEl = document.createElement("div");
//     divEl.setAttribute("key", movie.id);


//     const movieItem = `
//     <div class="movie-info">
//         <h3 class="movie_title">${movie.title}</h3>
//             <p class="movie_data">${movie.data}</p>
//             <p class="movie_desc">${movie.desc}</p>
//             <button class="btn">북마크 추가하기</button>
//     </div>
// `;
    
//     divEl.innerHTML = movieItem;

//     containerEl.append(divEl);
// });

// containerEl.addEventListener("click", (e) => {
//     const btn = e.target.classList.contains("btn");

//     if (btn) {
//         const $movieContainer = e.target.closest(".movie_container");
//         console.log($movieContainer.querySelector(".movie_container").textContent;);
//     };
// });



// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWM1NmEzNWVmMzg2NWI1YTM0MmE0YWVlZTgxZjEwZCIsIm5iZiI6MTcyOTIzMzU1Ny41Mzc1MTgsInN1YiI6IjY3MGY1MjMwMzNlMTQ3OGY3NjZkYzFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M0NJiBL4zOqf9lkPgYaEc4N4_tVWibkzXOsZafuSJTw'
//     }
//   };

// fetch('https://api.themoviedb.org/3/search/movie?include_adult=false&language=ko&page=1', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



// for (let i = 0; i < response.results.length; i++) {
//     const divEl = document.createElement("div");
//     const tempHtml = `
//         <div class="movie-card">
//           <img class="image" src="" alt="">
//           <div class="movie-info">
//             <h4 class="movie-title">${response.results[i].title}</h4>
//             <span class="green">${response.results[i].vote_average}</span>
//           </div>
//         </div>
//         `};


//     for (let i = 0; i < response.results; i++) {
//         const divEl = document.createElement("div");
//         <div class="movie-card">
//             <img class="image" src="" alt="">
//                 <div class="movie-info">
//                     <h4>${response.results[i].title}</h4>
//                     <span class="green">${response.results[i].vote_average}</span>
//                 </div>
//         </div>
//         `
//         divEl.innerHTML = tempHtml
//         $movieContainer.append(divEl)
//     }