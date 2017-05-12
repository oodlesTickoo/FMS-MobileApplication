angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {

})

.controller('ServicesCtrl', function($scope, Services) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.services = Services.all();
  /* $scope.remove = function(chat) {
     Chats.remove(chat);
   };*/
})

.controller('ContactsCtrl', function($scope, $stateParams) {

})

.controller('FaqCtrl', function($scope) {
  
})

.controller('SearchCtrl', function($scope, $state) {
  $scope.back = function() {
    $state.go("main.tab.home");
  };
})

.controller('SuperResultCtrl', function($scope, $state) {
  $scope.back = function() {
    $state.go("main.tab.home");
  };

  $scope.results = [{
    "heading": "Your Current Funds",
    "details": [{
      "name": "Fund Name",
      "text": "Australian Super"
    }, {
      "name": "Member or account number",
      "text": 30631011
    }, {
      "name": "Balance",
      "text": "$29,533,26"
    }]
  }, {
    "heading": "Your Lost Super",
    "details": [{
      "name": "Provider",
      "text": "The Trustee For Victorial Supperannuation Fund"
    }, {
      "name": "Balance",
      "text": "$59,515,49"
    }]
  }];
});
