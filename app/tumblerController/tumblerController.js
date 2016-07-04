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
        $scope.isImagesLoaded = false;
        function getImg() {
            $http({
                method: 'GET',
                url: 'http://api.tumblr.com/v2/blog/passport-life.tumblr.com/posts/photo?api_key=SOiMe7M47zoEcQYKtnuzjO6Kcq2M1dAZESAQ9ipStoqvpMMYpT&notes_info=true'
            }).then(whenSuccess, whenError);
        }
        $scope.loadImges = getImg;
        function whenSuccess(response) {
            response.data.response.posts.forEach(function (post) {
                post.photos.forEach(function (photo) {
                    $scope.images.push(photo);
                });
            });
            $scope.isImagesLoaded = true;
        }

        function whenError(error) {
            alert(error);
        }
        getImg();
    }]);