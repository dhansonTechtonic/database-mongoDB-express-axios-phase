class SearchBar {

    static init () {
        SearchBar._bindEvents();
    }

    static _bindEvents() {
        document.getElementById('input').addEventListener('input', SearchBar.handleInput);
    }

    static async handleInput(e) {
        var moviesToDisplay = [];
        if (e.target.value !== '') {
            var movies = await MovieDB.getMovies();
            for (var i = 0; i < movies.length; i++) {
                if (movies[i].title.toLowerCase().includes(e.target.value.toLowerCase())) {
                    moviesToDisplay.push(movies[i]);
                }
                Carousel.populateCarousel(moviesToDisplay);
            }
        } else {
            Carousel.populateCarousel(await MovieDB.getMovies());
        }
    }
}

document.addEventListener('DOMContentLoaded', SearchBar.init);