var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
    $scope.languages = [
        {
            title: 'JavaScript',
            developed: 'Brendan Eich',
            appeared: '1995',
            src: 'http://goo.gl/8Ndfzd'
        },
        {
            title: 'HTML',
            developed: 'W3C',
            appeared: '1993',
            src: 'http://goo.gl/ugAvhc'
        },
        {
            title: 'Java',
            developed: 'James Gosling',
            appeared: '1995',
            src: 'http://goo.gl/gOsRK3'
        }
    ];
});