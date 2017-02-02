angular.module('starter').controller('vacantesDetailController', function($scope, $state, $window) {

  $scope.goBack = function() {
    $state.go('tab.vacantes');
    // $window.history.back();
  };

  $scope.gomenuPage = function () {
    $state.go('tab.more');
  };

  $scope.view_pdf = function (url) {
    var ref = window.open(url, '_blank', 'location=no');
}

});
