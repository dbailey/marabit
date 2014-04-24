var marabit = angular.module('marabit', []);

marabit.controller('RacesCtrl', function ($scope) {
    $scope.races = [
        {'name': 'Walk 500 miles'},
        {'name': '3000 Chin Ups'}
    ];
});