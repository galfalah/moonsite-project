'use strict';

angular.module('myApp.tumblerController2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tumblerController2', {
            templateUrl: 'tumblerController2/tumblerController2.html',
            controller: 'tumblerController2'
        });
    }])

    .controller('tumblerController2', ['$scope', '$http', function ($scope, $http) {

        $scope.blogInfo;
        $scope.blogPosts;
        $scope.blogUrl;
        $scope.userPosts = [];
        function getBlogInfo() {
            $http({
                method: 'GET',
                url: 'http://api.tumblr.com/v2/blog/passport-life.tumblr.com/info?api_key=SOiMe7M47zoEcQYKtnuzjO6Kcq2M1dAZESAQ9ipStoqvpMMYpT&notes_info=true'
            }).then(whenSuccess, whenError);
        }

        $scope.loadBlogInfo = getBlogInfo;
        function whenSuccess(response) {
            $scope.blogInfo = response.data.response.blog.title;
            $scope.blogPosts = response.data.response.blog.posts;
            $scope.blogUrl = response.data.response.blog.url;
        }

        function whenError(error) {
            alert(error);
        }

        getBlogInfo();
        function getLinks() {
            $http({
                method: 'GET',
                url: 'http://api.tumblr.com/v2/blog/passport-life.tumblr.com/posts/link?api_key=SOiMe7M47zoEcQYKtnuzjO6Kcq2M1dAZESAQ9ipStoqvpMMYpT&notes_info=true'
            }).then(whenSuccessLinks, whenErrorLinks);
        }

        $scope.loadLinks = getLinks;
        function whenSuccessLinks(response) {
            response.data.response.posts.forEach(function (post) {
                $scope.userPosts.push(post);
            });
        }

        function whenErrorLinks(error) {
            alert(error);

        }

        getLinks();
    }]);