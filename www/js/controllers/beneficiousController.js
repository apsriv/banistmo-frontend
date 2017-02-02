angular.module('starter').controller('beneficiousController', function($scope, $state, $window, CouponService,IonicPopupService) {

  $scope.$on('$ionicView.enter', function(ev) {
    if (ev.targetScope !== $scope)
      return;

    CouponService.getAllCategories().then(function(response) {
      $scope.categories = [];
      if (response.success = "true") {
        // console.log('yes true');
          $scope.categories = response.data;
          // console.log('$scope.categories : ' +  angular.toJson(response.data, ' ') );
      }
    }).catch(function(error) {
        var error = JSON.parse(error);
        IonicPopupService.alert("ERROR!!", error);
        console.log('error : ' + angular.toJson(error, ' '));
    });

  });


  $scope.goBack = function() {
    $state.go('tab.more');
    // $window.history.back();
  };
  $scope.goBeneficiousSubCategoryPage= function(catId) {
    // $state.go('tab.beneficiousSubCategory');
      $state.go('tab.beneficiousSubCategory', { 'catId': catId });
  };

  $scope.goBeneficiousCouponsPage= function() {
    $state.go('tab.beneficiousCoupons');

  };
  // $scope.goBeneficiousCouponsPage= function(catId) {
  //   $state.go('tab.beneficiousCoupons' ,{ 'catId': catId });
  //
  // };


$scope.gomenuPage = function () {
  $state.go('tab.more');
};

});
