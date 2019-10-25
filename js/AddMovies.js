class AddMovies{
    static init() {
        AddMovies._bindEvents();
    }

    static _bindEvents() {
        document.getElementById('addMovieButton').addEventListener('click', AddMovies.collectFormData);
    }

    static async collectFormData (e) {
        e.preventDefault();
        var formData = {};
        formData.title = document.getElementById('title').value;
        formData.director = document.getElementById('director').value;
        formData.year = document.getElementById('year').value;
        formData.rating = parseInt(document.getElementById('rating').value);
        formData.plot = document.getElementById('plot').value;
        formData.cover = document.getElementById('addMovieCoverImage').getAttribute('src');
        var radios = document.getElementsByClassName('radio-group')[0].children;
        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                formData.haveIt = radios[i].value;
                break;
            }
        }
        Carousel.populateCarousel(await MovieDB.getMovies());
        document.getElementById('addMovieForm').reset();
        document.getElementById('addMovieCoverImage').setAttribute('src', './assets/generic.jpg');
    }

    static _handleImageUpload() {
        const preview = document.querySelector('#addMovieCoverImage');
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

document.addEventListener('DOMContentLoaded', AddMovies.init);