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
  $scope.groups = [];

  $scope.groups = [{
    title: 'DOES FIND MY SUPER GUARANTEE A RESULT?',
    contents: [{
      text: 'Find my super cannot guarantee a result. We rely on the accuracy of your data as well as the accuracy coming from the superannuation funds. All superannuation funds have to report contributions with a tax file number. If the tax file number matches then we are more likely to get a positive result.'
    }]
  }, {
    title: 'WHY IS THE FIND MY SUPER SEARCH DIFFERENT?',
    contents: [{
      text: 'Find my super understand the superannuation industry better than most service providers. Because the quality of data has been historically poor from employers and individuals then quite a number of funds do not have up to date accurate data.',
      text1: 'It has only been recently required that all contributions have a corresponding tax file number attached to contributions otherwise penalty tax is applied to that contribution. It is this breakthrough that has made our job easier to match contributions and therefore account numbers and in turn lump sums of superannuation money.',
      text2: 'Find my super are the only organisation that professionally search contribution information to loccate active and inactive accounts.'
    }]
  }, {
    title: 'IS YOUR SEARCH FREE?',
    contents: [{
      text: 'If you would like us to search for lost super and you want to consolidate your accounts yourself then we will search for your accounts for free.'
    }]
  }, {
    title: 'WHY DO I PAY A FEE OF $250.00?',
    contents: [{
      text: ' We charge a fee of $250.00 to cover our costs in preparing the paperwork and sending off multiple requests to superannuation funds to confirm and appoint Find My Super to act on your behalf. In addition to this service we will prepare all the roll over forms for all accounts that we have been advised match your tax file number. We will also prepare a letter of instruction to your nominated superannuation fund to give them clear direction to them that you would like them to chase up the accounts that you have roll over paperwork for. These tasks take time and cost money and that is what our fee is for.'
    }]
  }, {
    title: 'CAN I GET ADVICE ON WHERE I SHOULD PUT MY SUPER?',
    contents: [{
      text: 'Find my super allows you to nominate which fund you would like to use to consolidate your accounts into. Shortly we will be offering a limited advice service that will assist you to compare all the low cost superannuation funds and advise you which are the best to consolidate into. We will appoint specialised financial advisers to this role shortly. If you are interested in applying for a position then please send your resume to info@findmysuper.com.au'
    }]
  }];


  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
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
