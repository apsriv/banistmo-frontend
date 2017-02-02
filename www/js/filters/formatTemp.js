
  angular.module('starter').filter('formatTemp', function($filter) {
      return function(input, precision) {
          if (!precision) {
              precision = 1;
          }
          var numberFilter = $filter('number');
          return numberFilter(input, precision) + '\u00B0C';
      };
  });
