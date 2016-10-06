//define(['Application'], function (apps) {
      app.register.controller('StartController', function($scope,$http) {
      			
            $scope.headtext = 'StartAngular';

            $scope.cards = [
                              {
                                 'title' : 'Feature Label 1',
                                 'image' : 'storage/images/kep1.jpg',
                                 'description' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                              },
                              {                                 
                                 'title' : 'Feature Label 2',
                                 'image' : 'storage/images/kep2.jpg',
                                 'description' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                              },
                              {                                 
                                 'title' : 'Feature Label 3',
                                 'image' : 'http://placehold.it/800x500',
                                 'description' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                              },
                              {                                 
                                 'title' : 'Feature Label 4',
                                 'image' : 'http://placehold.it/800x500',
                                 'description' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
                              },
  
                              ];


      });
//});
