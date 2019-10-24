class MovieDB {
    static postMovie(formData) {
        if (formData) {
            fetch('http://127.0.0.1:3001/database', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(function (res) {
                return res;
            }).catch(function (err) {
                console.log("There was a problem posting your movie");
                return err;
            });
        }
    }

    static editMovie(formData, id) {
        console.log(formData)
        if (formData) {
            fetch(`http://127.0.0.1:3001/database/edit?id=${id}`, {
                method: 'PUT',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(function (res) {
                return res;
            }).catch(function (err) {
                console.log("There was a problem editing your movie");
                return err;
            });
        }
    }

    static deleteMovie(id) {
        var deleteResponse = fetch(`http://127.0.0.1:3001/database/deleteBy?id=${id}`,
            { method: 'DELETE' })
            .then(function (res) {
                console.log('The movie has been removed');
                return res;
            }).catch(function (err) {
                console.log("There was a problem deleting that movie");
                return err;
            });
        return deleteResponse;
    }

    static getMovies(){
        var movieResponse = fetch(`http://127.0.0.1:3001/database`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        }).then(function (res) {
            return res.json();
        }).then((res) => {
            return res;
        }).catch(function (err) {
            console.log("Error finding movies");
            console.log(err);
        });
        return movieResponse;
    }

    static getMovieById(id) {
        var movieResponse = fetch(`http://127.0.0.1:3001/database/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        }).then(function (res) {
            return res.json();
        }).then((res) => {
            return res;
        }).catch(function (err) {
            console.log("Error finding movies");
            console.log(err);
        });
        return movieResponse;
    }
}