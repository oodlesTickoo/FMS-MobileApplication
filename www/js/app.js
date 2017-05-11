// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
// 'starter.directives is found in directives.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js

  $ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
  $ionicConfigProvider.tabs.style("standard"); // Override the Android platform default to add "tabs-striped" class to "ion-tabs" elements.


  $stateProvider

  // setup an abstract state for the tabs directive

    .state('main', {
    url: "",
    abstract: true,
    templateUrl: "templates/main.html"
  })

  .state('main.tab', {
    url: "/tab",
    abstract: true,
    views: {
      'main-content': {
        templateUrl: "templates/tabs.html",
      }
    }
  })



  // Each tab has its own nav history stack:

  .state('main.tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })


  /*sub pages*/
  .state('main.newsearch', {
    url: '/newsearch',
    views: {
      'main-content': {
        templateUrl: 'templates/newSearch.html',
        controller: 'SearchCtrl'
      }
    }
  })

  .state('main.superresults', {
    url: '/superresults',
    views: {
      'main-content': {
        templateUrl: 'templates/superResult.html',
        controller: 'SuperResultCtrl'
      }
    }
  })

  .state('main.tab.services', {
    url: '/services',
    views: {
      'tab-services': {
        templateUrl: 'templates/tab-services.html',
        controller: 'ServicesCtrl'
      }
    }
  })

  .state('main.tab.contacts', {
    url: '/contacts',
    views: {
      'tab-contacts': {
        templateUrl: 'templates/tab-contacts.html',
        controller: 'ContactsCtrl'
      }
    }
  })

  .state('main.tab.faq', {
    url: '/faq',
    views: {
      'tab-faq': {
        templateUrl: 'templates/tab-faq.html',
        controller: 'FaqCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

});
