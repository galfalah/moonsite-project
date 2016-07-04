'use strict';

angular.module('myApp.tumblerController2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tumblerController2', {
            templateUrl: 'tumblerController2/tumblerController2.html',
            controller: 'tumblerController2'
        });
    }])

    .controller('tumblerController2', ['$scope', '$http', function ($scope, $http) {

        $scope.blogTitle;
        $scope.TotalNumOfBlogPosts;
        $scope.blogUrl;
        $scope.userPosts = [];

        //http request to get blog info from tumbler API
        function getBlogInfo() {
            $http({
                method: 'GET',
                url: 'http://api.tumblr.com/v2/blog/passport-life.tumblr.com/info?api_key=SOiMe7M47zoEcQYKtnuzjO6Kcq2M1dAZESAQ9ipStoqvpMMYpT&notes_info=true'
            }).then(whenSuccess, whenError);
        }

         //add get blog info func to scope
        $scope.loadBlogInfo = getBlogInfo;

        //func to run when http request getBlogInfo success
        function whenSuccess(response) {
            $scope.blogTitle = response.data.response.blog.title; //add blog title from API answer to scope
            $scope.TotalNumOfBlogPosts = response.data.response.blog.posts; //add total number of posts from API answer to scope
            $scope.blogUrl = response.data.response.blog.url; //add blog url from API answer to scope
        }

        //func to run when http request failed
        function whenError(error) {
            alert(error);
        }

        //run func
        getBlogInfo();

        //http request to get blog posts links from tumbler API
        function getLinks() {
            $http({
                method: 'GET',
                url: 'http://api.tumblr.com/v2/blog/passport-life.tumblr.com/posts/link?api_key=SOiMe7M47zoEcQYKtnuzjO6Kcq2M1dAZESAQ9ipStoqvpMMYpT&notes_info=true'
            }).then(whenSuccessLinks, whenErrorLinks);
        }

        //add get links func to scope
        $scope.loadLinks = getLinks;

        //func to run when http request getLinks success
        function whenSuccessLinks(response) {
            //add each post to user posts array
            response.data.response.posts.forEach(function (post) {
                $scope.userPosts.push(post);
            });
        }

        //func to run when http request failed
        function whenErrorLinks(error) {
            alert(error);

        }
        
        //run func
        getLinks();
    }]);