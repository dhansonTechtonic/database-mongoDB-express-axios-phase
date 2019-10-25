class Carousel{

    constructor(){
        this.movies = [];
    }

    static init () {
        Carousel.getMovies();
    }

    static async getMovies(){
        this.movies = await MovieDB.getMovies();
        Carousel.populateCarousel(this.movies);
    }

    static populateCarousel(movies){
        console.log(movies);
        if (movies === undefined || movies.length === 0) {
            var slider = document.getElementsByClassName('slider')[0];
            if (slider.children.length > 0) {
                while (slider.firstChild) slider.removeChild(slider.firstChild);
            }
            var h1 = document.createElement('h1');
            h1.innerHTML = 'No movies! Add a movie now.';
            slider.append(h1);
        } else {
            for (let i = 0; i < movies.length; i++) {
                if (movies[i].title.charAt(0) === 'T' && movies[i].title.charAt(1) === 'h' && movies[i].title.charAt(2) === 'e' && movies[i].title.charAt(3) === ' '){
                    movies[i].title = movies[i].title.substring(4);
                }
            }
            movies = movies.sort((a,b)=>{
                if (a.title < b.title) {return -1;}
                    if (a.title>b.title) {return 1;}
                        return 0;
            })
            var sliders = document.getElementsByClassName("slider");
            if (sliders[0].children.length > 0) {
                while (sliders[0].firstChild) sliders[0].removeChild(sliders[0].firstChild);
            }

            if (movies.length === 0) {
                sliders[0].append(document.createElement('h1'));
                sliders[0].children[0].innerHTML = 'No movies! Add a movie now.';
            } else {
                for (var i = 0; i < movies.length; i++) {
                    sliders[0].append(new Image());
                    var imgs = sliders[0].children;
                    imgs[i].setAttribute("src", movies[i].cover);
                    imgs[i].setAttribute("alt", movies[i].title);
                    imgs[i].setAttribute("id", movies[i]._id);
                    imgs[i].addEventListener('click', Viewer.handleImageClick);
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', Carousel.init);