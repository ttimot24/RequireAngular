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
		    .when(
		    		"/", 
		    		route.resolve('Start')
		    )
		    .when(
		    		"/blog",
		    		route.resolve('Blog')
		    ).when(
		    		"/alert",
		    		route.resolve('alert')
		    )
		    .otherwise(
		    	route.resolve('404')
		    	//{redirectTo: '/'}
		    	);


});
