/**
 * Déclaration de l'application routeApp
 */
var routeApp = angular.module('routeApp', [
    // Dépendances du "module"
    'ngRoute',
	'routeAppControllers'
]);

/**
 * Configuration du module principal : routeApp
 */
routeApp.config(['$routeProvider',
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/accueil', {
            templateUrl: 'vues/accueil.html',
            controller: 'accueilCtrl'
        })
        .when('/asso', {
            templateUrl: 'vues/asso.html',
            controller: 'assoCtrl'
        })
		.when('/trainig', {
            templateUrl: 'vues/training.html',
            controller: 'trainigCtrl'
        })
		.when('/ourchallenge', {
            templateUrl: 'vues/ourchallenge.html',
            controller: 'ourchallengeCtrl'
        })
		.when('/calendar', {
            templateUrl: 'vues/calendar.html',
            controller: 'calendarCtrl'
        })
		.when('/contact', {
            templateUrl: 'vues/contact.html',
            controller: 'contactCtrl'
        })
		.otherwise({
            redirectTo: '/accueil.html'
        });
    }
]);

/**
 * Définition des contrôleurs
 */
var routeAppControllers = angular.module('routeAppControllers', []);

// Contrôleur de la page d'accueil
routeAppControllers.controller('accueilCtrl', ['$scope',
    function($scope){
        $scope.message = "Bienvenue sur la page d'accueil";
    }
]);

// Contrôleur de la page de contact
routeAppControllers.controller('contactCtrl', ['$scope','$routeParams',
    function($scope, $routeParams){
        $scope.message = "Laissez-nous un message sur la page de contact !";
        // Si aucun paramètre n'est passé, on met notre phrase initiale
        $scope.msg = $routeParams.msg || "Bonne chance pour cette nouvelle appli !";
    }
]);