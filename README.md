# database-mongoDB-express-axios-phase
## Overview
- The point of this exercise is to help students to be able to set up an application from the ground up using Node.js, express, mongoDB, axios, and mongoose. It is important to know how to do this so students can apply their knowledge to their projects on the floor.

## Instructions
### Front End
#### MovieDB.js

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

 #### Carousel.js

Will be using all static methods. At the end of the file the init function should be called on 'DomContentLoaded'.

 * [x] constructor: will contain an empty array called ```this.movies```.

  - parameters: none

 * [x] init: will call ```Carousel.getMovies()```.

  - parameters: none

 * [x] getMovies: will be asynchronous and will set ```this.movies``` to the result of ```MovieDB.getMovies()``` and then it will pass ```this.movies``` to ```Carousel.populateCarousel()```.

  - parameters: none

 * [x] populateCarousel: this will populate the carousel using DOM traversal and manipulation with the movies that are passed to it. If there are no movies, this should be reflected in the UI.

 - parameters: movies

 #### Viewer.js

 Will be using all static methods

 * [x] handleImageClick: will be asynchronous and will populate the section with the class name ```viewer``` with info on the movie that was selected from the carousel using DOM traversal and manipulation as well as ```MovieDB.getMovieById()```.

 - parameters: e or event

 * [x] handleDelete: will be asynchronous and will delete the selected movie from the database as well as clearing out the ```viewer```.

 - parameters: e or event