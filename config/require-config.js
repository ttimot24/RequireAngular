requirejs.config({
    baseUrl: './',
    paths: {
        "jQuery": "vendor/jquery/jquery",
        "AngularJS": "vendor/angular/angular.min",
        "AngularRoute": "vendor/angular/route",
        "RouteResolver": "app/service/AngularRouteResolver",
        "Bootstrap": "vendor/bootstrap/js/bootstrap",
        "Application": "app/application",
        "Less": "vendor/less/less",
        "Babel" : "vendor/babel/babel",
        "MomentJS" : "vendor/moment/moment",
        "AngularMoment" : "app/service/AngularMoment",
        "NiceScroll" : "vendor/nicescroll/jquery.nicescroll.min",
    },
    shim: {
        "Application" : {
            deps: ["Less","AngularRoute","Bootstrap","RouteResolver","Babel",/*,"AngularMoment"*/], 
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
        "Babel" : {
           
        },
        "MomentJS" : {
            deps : ["jQuery"],
            exports : "moment",
        },
        "AngularMoment" : {
            deps : ["AngularRoute","MomentJS"],
        }
    },
    deps: ["Application"],


});


console.log("RequireJS config loaded successfully!");


requirejs(
    [
        "Application",
        "app/model/ES6/Card.js",
        "app/model/ES6/Blogpost.js",
    ],
    function ($) {
        angular.bootstrap(document.body, ['startAngularApp']); //Nem kell ng-app a HTML-be ha ezt használjuk
        console.log("AngularJS started successfully!");

    });