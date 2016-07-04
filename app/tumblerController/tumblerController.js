'use strict';

angular.module('myApp.tumblerController', ['ngRoute'])

    .config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $routeProvider.when('/tumblerController', {
            templateUrl: 'tumblerController/tumblerController.html',
            controller: 'tumblerController'
        });
    }])

    .controller('tumblerController', ['$scope', '$http', function ($scope, $http) {
        $scope.images = [];

        //HTTP get images from tumbler
        function getImg() {
            $http({
                method: 'GET',
                url: 'http://api.tumblr.com/v2/blog/passport-life.tumblr.com/posts/photo?api_key=SOiMe7M47zoEcQYKtnuzjO6Kcq2M1dAZESAQ9ipStoqvpMMYpT&notes_info=true'
            }).then(whenSuccess, whenError);
        }

        //add function to scope
        $scope.loadImges = getImg;

        //function  to run when http request success
        function whenSuccess(response) {
           //for each post take all photos and push to scope images array
            response.data.response.posts.forEach(function (post) {
                post.photos.forEach(function (photo) {
                    $scope.images.push(photo);
                });
            });

        }

        // function to run in case http request failed
        function whenError(error) {
            alert(error);
        }
        // run get images fun, this load images to HTML
        getImg();
    }]);