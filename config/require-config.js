require.config({
   // baseUrl: '/../',
    paths: {
        "jQuery": "vendor/jquery/jquery",
        "AngularJS": "vendor/angular/angular.min",
        "AngularRoute": "vendor/angular/route",
        "Bootstrap": "vendor/bootstrap/js/bootstrap",
        "Application": "app/application"
    },
    shim: {
        "Application" : {
            deps: ["AngularRoute","Bootstrap"], 
        },
        "AngularRoute" : {
            deps : ["AngularJS"],
        },
        "AngularJS" : {
            deps : ["jQuery"],
        },
        "jQuery":{
            exports: "$",
        },
        "Bootstrap" : {
            deps : ["jQuery"],
        }
    },
    deps: ["Application"]
});


console.log("RequireJS config loaded successfully!");


require(
    [
       // "jQuery",
        //"AngularJS",
        //"AngularRoute",
       // 'app/service/routeResolver',
        "Application",
       // 'vendor/spin.js/spin',
    ],
    function (angular) {
        angular.bootstrap(document, ['startAngularApp']);
        console.log("AngularJS started successfully!");
    });