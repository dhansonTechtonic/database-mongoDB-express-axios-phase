class Viewer {
    static async handleImageClick (e){
        var movies = await MovieDB.getMovieById(e.target.id);
        var noMovies = document.getElementById("no-movies");

        if (noMovies) {
            noMovies.remove();
        }

                var movieInfo = document.getElementsByClassName("movie-info")[0].children;

                movieInfo[0].children[0].setAttribute("src", movies.cover);
                movieInfo[0].children[0].setAttribute("alt", movies.title);
                movieInfo[1].children[0].innerHTML = movies.title;

                var li1 = document.createElement('li');
                li1.innerHTML = "Director: " + movies.director;
                var li2 = document.createElement('li');
                li2.innerHTML = "Year: " + movies.year;
                var li3 = document.createElement('li');
                li3.innerHTML = "Rating: " + movies.rating + "/10";
                var li4 = document.createElement('li');

                if (movies.haveIt) {
                    li4.innerHTML = "Have It? Yes!";
                } else {
                    li4.innerHTML = "Have it? No :(";
                }

                while (movieInfo[1].children[1].firstChild) movieInfo[1].children[1].removeChild(movieInfo[1].children[1].firstChild);

                movieInfo[1].children[1].append(li1, li2, li3, li4);

                movieInfo[2].children[0].innerHTML = movies.plot;
                var btn = document.createElement('button');
                btn.setAttribute('id', movies._id);
                btn.innerHTML = 'Delete';
                btn.addEventListener('click', Viewer.handleDelete);
                var btnEdit = document.createElement('button');
                btnEdit.setAttribute('id', movies._id);
                btnEdit.innerHTML = 'Edit';
                btnEdit.addEventListener('click', EditMovies.populateEditForm);
                if (movieInfo[2].children.length == 1){
                    movieInfo[2].append(btn);
                    movieInfo[2].append(btnEdit);
                }
    }

    static async handleDelete(e) {
        var id = e.target.id;
        await MovieDB.deleteMovie(id);
        var movies = await MovieDB.getMovies()
        if (movies.length === 1) {
            Carousel.populateCarousel([]);
        }else{
            Carousel.populateCarousel(movies);
        }
        var viewer = document.getElementsByClassName('viewer')[0];
        while (viewer.firstChild) viewer.removeChild(viewer.firstChild);
        var h1 = document.createElement('h1');
        h1.innerHTML = 'No movie selected. Select a movie to view.';
        h1.setAttribute('id', 'no-movies');
        viewer.append(h1);
        var movieInfo = document.createElement('section');
        movieInfo.setAttribute('class', 'movie-info');
        viewer.append(movieInfo);
        var section = document.createElement('section');
        var section2 = document.createElement('section');
        var section3 = document.createElement('section');
        var img = document.createElement('img');
        var anotherh1 = document.createElement('h1');
        var ul = document.createElement('ul');
        var p = document.createElement('p');
        section.append(img);
        section2.append(anotherh1, ul);
        section3.append(p);
        movieInfo.append(section, section2, section3);
    }
}