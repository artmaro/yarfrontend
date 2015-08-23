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

app.directive('languageCard', function(){
    return {
        restrict: 'E',
        scope: {
            lang: '='
        },
        templateUrl: 'lang.html'
    }
});


app.directive('edit', function () {
    return {
        template: '<input ng-model="value"/>',
        scope: {
            value: '='
        }
    }
}).directive('print', function () {
    return {
        template: "<b>{{value}}</b><input ng-model='value'></input>",
        scope: {
            value: '@'
        }
    }
}).directive('replace', function () {
    return {
        template: '<b>{{replaceFunc()}}</b>',
        scope: {
            replaceFunc: '&'
        }
    }
});


app.directive('box', function () {
    return {
        transclude: true,
        templateUrl: 'box.html'
    }
});