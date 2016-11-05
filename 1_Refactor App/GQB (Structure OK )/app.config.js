'use strict';

var app = angular.module('gqb', ['ui.compat', 'gqb.services', 'gqb.directives', 'gqb.controllers']);

// Namespaces
var gqb = {};
gqb.ctrls = angular.module('gqb.controllers', []);
gqb.directives = angular.module('gqb.directives', []);
gqb.services = angular.module('gqb.services', []);

// Configuration
app.constant('WEBSERVICE_URL', 'https://YOURWEBSERVICE');

// Dsl Generator
gqb.services.factory('DslGenerator', function(TrailsDslGenerator) {
  return TrailsDslGenerator;
});

// Routing
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('query', {
    url: '/query',
    views: {
      '': {
        templateUrl: 'views/query.layout.view.html'
      },
      'graph@query': {
        templateUrl: 'views/query.graph.view.html'
      },
      'propertyFilter@query': {
        templateUrl: 'views/query.propertyFilter.view.html'
      },
      'queryField@query': {
        templateUrl: 'views/query.queryField.view.html'
      },
      'breadcrumbs@query': {
        templateUrl: 'views/query.breadcrumbs.view.html'
      },
      'resultView@query': {
        templateUrl: 'views/query.resultView.view.html'
      }
    }
  });
  $stateProvider.state('admin', {
    url: '/admin',
    views: {
      '': {
        templateUrl: 'views/admin.layout.view.html'
      }
    }
  });
  $stateProvider.state('help', {
    url: '/help',
    views: {
      '': {
        templateUrl: 'views/help.layout.view.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/query');
});
