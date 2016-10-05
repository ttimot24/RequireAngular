var app = angular.module('startAngularApp', ["ngRoute","routeResolverServices"]);



app.config(function($routeProvider,routeResolverProvider,$controllerProvider,$compileProvider, $filterProvider, $provide){


routeResolverProvider.routeConfig.setBaseDirectories('app/view/', 'app/controller/');
var route = routeResolverProvider.route;



    app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };





    $routeProvider
		    .when("/", //{
		    	route.resolve('Start')
		    	/*controller : "StartController",
		        templateUrl : "app/view/start.html"*/
		    /*}*/).when("/blog",//{
		    		route.resolve('Blog')
		    	//controller : "StartController",
		    	//templateUrl : "app/view/blog.html"
		    /*}*/)
		    .otherwise({redirectTo: '/'});


});
