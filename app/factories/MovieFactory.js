"use strict";

MovieHistory.factory("movieFactory", ($q, $http) =>
  () =>
    $q((resolve, reject) => // Return a promise for our async XHR
      $http
        .get("https://moviehistbnc.firebaseio.com//movies.json")
        .success(
          movieCollection => resolve(movieCollection),
          error => reject(error)
        )
    )
);

