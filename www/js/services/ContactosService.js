angular.module('starter')

.service('ContactosService', ["$q", "$http", function($q, $http) {

  this.getAllContactos = function() {
      var def = $q.defer();

      var url = AppSettings.url + 'contacts';
      headers = {
          'Content-Type': 'application/x-www-form-urlencoded'
      };

      $http({
          method: 'GET',
          url: url,
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: function(obj) {
              var str = [];
              for (var p in obj)
                  str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
              return str.join("&");
          }
      }).success(function(body, status, headers, config) {
          // console.log("body : " + JSON.stringify(body));
          def.resolve(body);
      }).
      error(function(error, status, headers, config) {
          console.log("Error : " + JSON.stringify(error));
          def.reject(JSON.stringify(error));
      });

      return def.promise;
  };


}]);
