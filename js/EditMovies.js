class EditMovies {
    static init() {
        EditMovies._bindEvents();
        this.id = '';
    }

    static _bindEvents() {
        document.getElementsByClassName('editMovieButton')[0].addEventListener('click', EditMovies.collectFormData);
    }

    static async populateEditForm(e) {
        this.id = e.target.id;
        document.getElementsByClassName('editMovieButton')[0].setAttribute('id', e.target.id);
        var movie = await MovieDB.getMovieById(e.target.id);
        movie = movie[0];
        var form = document.getElementById('editMovieForm');
        form.setAttribute('class', 'editMovieFormShown');
        form.removeAttribute('id');        
        var inputs = document.getElementsByClassName('editMovieFormShown')[0].children;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].id == 'titleEdit'){
                inputs[i].value = movie.title;
            }else if (inputs[i].id == 'directorEdit'){
                inputs[i].value = movie.director;
            } else if (inputs[i].id == 'ratingEdit') {
                inputs[i].value = movie.rating;
            } else if (inputs[i].id == 'yearEdit') {
                inputs[i].value = movie.year;
            } else if (inputs[i].id == 'plotEdit') {
                inputs[i].value = movie.plot;
            }
        }
        var radios = inputs[6].children;
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].value == movie.haveit.toString()) {
                radios[i].checked = true;
            }
        }
        inputs[8].setAttribute('src', movie.cover);
    }

    static async collectFormData (e) {
        e.preventDefault();
        var formData = {};
        formData.title = document.getElementById('titleEdit').value;
        formData.director = document.getElementById('directorEdit').value;
        formData.year = document.getElementById('yearEdit').value;
        formData.rating = parseInt(document.getElementById('ratingEdit').value);
        formData.plot = document.getElementById('plotEdit').value;
        formData.cover = document.getElementById('editMovieCoverImage').getAttribute('src');
        var radios = document.getElementsByClassName('radio-groupEdit')[0].children;
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                formData.haveit = radios[i].value;
                break;
            }
        }
        MovieDB.editMovie(formData, this.id);
        document.getElementsByClassName('editMovieFormShown')[0].reset();
        document.getElementsByClassName('editMovieFormShown')[0].setAttribute('id', 'editMovieForm');
        document.getElementsByClassName('editMovieFormShown')[0].removeAttribute('class');
        document.getElementById('editMovieCoverImage').setAttribute('src', './assets/generic.jpg');
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
        Carousel.populateCarousel(await MovieDB.getMovies());
    }

    static _handleImageUpload() {
        const preview = document.querySelector('#editMovieCoverImage');
        const file = document.querySelector('input[type=file]').files[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            preview.src = reader.result;
        }, false);

        if (file) {
            return reader.readAsDataURL(file);
        }
    }
}

document.addEventListener('DOMContentLoaded', EditMovies.init);
