requirejs.config({
    //baseUrl: '..',
    paths: {
        "jQuery": "vendor/jquery/jquery",
        "AngularJS": "vendor/angular/angular.min",
        "AngularRoute": "vendor/angular/route",
        "RouteResolver": "app/service/routeResolver",
        "Bootstrap": "vendor/bootstrap/js/bootstrap",
        "Application": "app/application",
        "Less": "vendor/less/less",
        "Spinner": "vendor/spin.js/spin",
    },
    shim: {
        "Application" : {
            deps: ["Less","AngularRoute","Bootstrap","RouteResolver","Spinner"], 
        },
        "RouteResolver":{
            deps: ["jQuery","AngularRoute"],
        },
        "AngularRoute" : {
            deps : ["AngularJS"],
        },
        "AngularJS" : {
            deps : ["jQuery"],
            exports: 'angular',
        },
        "Less":{
            deps: ["jQuery"],
        },
        "jQuery":{
            exports: "$",
        },
        "Bootstrap" : {
            deps : ["jQuery"],
        },
        "Spinner":{
            deps: ["jQuery"],
        }
    },
    deps: ["Application"]
});


console.log("RequireJS config loaded successfully!");


requirejs(
    [
        "AngularJS",
        "Application",
    ],
    function () {
        angular.bootstrap(document, ['startAngularApp']);
        console.log("AngularJS started successfully!");
    });