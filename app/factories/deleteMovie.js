'use strict';

MovieHistory.factory("delete-movie", function($q, $http) {

	let deleteMovie = (key) => {
	 	return $q(function(resolve, reject) {
			$http.delete(`https://dreamteam-music-hist.firebaseio.com/movies/${key}/.json`)
	    		.success(
	                (movieData) => resolve(movieData),
	                (error) => reject(error)
	            );
	        });
	};

	return deleteMovie;
})