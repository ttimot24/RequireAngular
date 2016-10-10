//define(['Application'], function (apps) {
      app.register.controller('StartController', function($scope,$http/*,moment*/) {
      			
            $scope.headtext = 'StartAngular';
            
            $scope.cards = [

                              new Card('Feature Label 1','storage/images/kep1.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
                              new Card('Feature Label 2','storage/images/kep2.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
                              new Card('Feature Label 3','storage/images/kep3.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
                              new Card('Feature Label 4','storage/images/kep4.jpg','Lorem ipsum dolor sit amet, consectetur adipisicing elit.'),
  
                              ];


           // $scope.now = moment();


      });
//});
