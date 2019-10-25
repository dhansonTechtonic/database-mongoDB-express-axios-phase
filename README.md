# database-postgresql-express-axios-phase
## Overview
- The point of this exercise is to help students to be able to set up an application from the ground up using Node.js, express, postgresql, axios, and mongoose. It is important to know how to do this so students can apply their knowledge to their projects on the floor.

## Instructions

### Front End

#### /js/MovieDB.js

Will be using all static methods

* [x] postMovie: uses axios to post a movie to the database.
 
 - parameters: formData

* [x] editMovie: uses axios to edit a movie in the database by id.

 - parameters: formData, id

 * [x] deleteMovie: uses axios to delete a movie in the database by id.

 - parameters: id

 * [x] getMovies: uses axios to get all movies in the database.

 - parameters: none

 * [x] editMovie: uses axios to get a specific movie in the database by id.

 - parameters: id

 #### /js/Carousel.js

Will be using all static methods. At the end of the file the init function should be called on 'DomContentLoaded'.

 * [x] constructor: will contain an empty array called ```this.movies```.

  - parameters: none

 * [x] init: will call ```Carousel.getMovies()```.

  - parameters: none

 * [x] getMovies: will be asynchronous and will set ```this.movies``` to the result of ```MovieDB.getMovies()``` and then it will pass ```this.movies``` to ```Carousel.populateCarousel()```.

  - parameters: none

 * [x] populateCarousel: this will populate the carousel using DOM traversal and manipulation with the movies that are passed to it. If there are no movies, this should be reflected in the UI.

 - parameters: movies

 #### /js/Viewer.js

 Will be using all static methods

 * [x] handleImageClick: will be asynchronous and will populate the section with the class name ```viewer``` with info on the movie that was selected from the carousel using DOM traversal and manipulation as well as ```MovieDB.getMovieById()```.

 - parameters: e or event

 * [x] handleDelete: will be asynchronous and will delete the selected movie from the database as well as clearing out the ```viewer```.

 - parameters: e or event

 #### /js/SearchBar.js

Will be using all static methods. At the end of the file the init function should be called on 'DomContentLoaded'.

* [x] init: will call ```SearchBar._bindEvents()```.

- parameters: none

* [x] _bindEvents: will bind ```SearchBar.handleInput``` to ```input```.

- parameters: none

* [x] handleInput: will be asynchronous and will use ```MovieDB.getMovies()``` to populate the carousel based on what is typed into the search bar. There will need to be a temporary array to hold the results of the search.

- parameters: e or event

#### /js/AddMovies.js

Will be using all static methods. At the end of the file the init function should be called on 'DomContentLoaded'.

* [x] init: will call ```AddMovies._bindEvents()```.

- parameters: none

* [x] _bindEvents: will bind ```AddMovies.collectFormData``` to ```addMovieButton```.

- parameters: none

* [x] collectFormData: will be asynchronous and will collect the data from the form and make it into an object. It will post that object to the database using ```MovieDB.postMovie()```. Then it will repopulate the carousel with the new movie and reset the form. There will need to be form validation.

- parameters: e or event

* [x] handleImageUpload: this will be provided for you but we will walk through what it is doing in class

#### /js/EditMovies.js

Will be using all static methods. At the end of the file the init function should be called on 'DomContentLoaded'.

* [x] init: will call ```EditMovies._bindEvents()``` and will have ```this.id  ``` set to an empty string.

- parameters: none

* [x] _bindEvents: will bind ```EditMovies.collectFormData``` to ```editMovieButton```.

- parameters: none

* [x] populateEditForm: will be asynchronous and will use e.target.id and ```MovieDB.getMovieById()``` to populate the edit form with information on that movie that was selected. In order to make the modal pop up you will need to add a class attribute to ```editMovieForm``` called ```editMovieFormShown``` and remove the id.

- parameters: e or event

* [x] collectFormData: will be asynchronous and will collect the form data and make an object out of it that will be put to the database using ```MovieDB.editMovie```. The form will need to be reset, the modal closed, and the carousel repopulated. There will need to be form validation.

- parameters: e or event

### Backend

#### /controllers/DatabaseController.js

* [x] router.post: endpoint will be '/'. Will be using ```pool.query``` and ```INSERT```.

* [x] router.put: endpoint will be 'edit?'. Will be using ```pool.query``` and ```UPDATE```.

* [x] router.get: endpoint will be '/'. Will be using ```pool.query``` and ```SELECT```.

* [x] router.get: endpoint will be '/:id'. Will be using ```pool.query``` and ```SELECT```.

* [x] router.delete: endpoint will be '/deleteBy?'. Will be using ```pool.query``` and ```DELETE```.