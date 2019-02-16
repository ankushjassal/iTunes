var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http({
        method: 'GET',
        url: 'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
        dataType: 'json'
    })
    $scope.topalbums = new Array;
    $http(request)
                .success(function (jsonData) {
                    $scope.topalbums = jsonData;
                    $scope.albums = $scope.topalbums;
                })
                .error(function () {

                });
});