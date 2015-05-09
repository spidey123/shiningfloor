app.controller('filterCtrl', ['$scope', '$http', '$filter', function($scope, $http, $filter) {
  $http.get('js/controllers/filter.json').then(function (resp) {

    $scope.products = resp.data.products;
    $scope.product_no = $scope.products[0];
    $scope.selectedProduct = $scope.products[0].product_name;

    // console.log($scope.product_no);
       // console.log($scope.products);
    $scope.product_no.selected = true;

    $scope.locations =  $scope.product_no.locations;

    $scope.locations =  $scope.product_no.locations;

      $scope.location_no = $scope.locations[0];
      $scope.selectedLocation = $scope.locations[0].location;
       console.log($scope.selectedLocation);
      $scope.location_no.selected = true;
  
    
    console.log($scope.selectedLocation);
  });

  $scope.budgets = [ 0 , 1 , 2 , 3, 4, 5];


  

  $scope.dropdownHandle= function(){
    $('#dropdowndisplay').toggleClass('customClass');
   console.log('sfsfs');
  };

 

  

  $scope.selectProduct = function(product){ 
    angular.forEach($scope.products, function(product_no) {
      product_no.selected = false;

    });
    $scope.product_no = product;
    $scope.product_no.selected = true;

    $scope.selectedProduct = $scope.product_no.product_name;

    $scope.locations =  $scope.product_no.locations;
      $scope.location_no = $scope.locations[0];
      $scope.selectedLocation = $scope.locations[0].location;
       console.log($scope.selectedLocation);
      $scope.location_no.selected = true;
    


  };

  $scope.selectLocation = function(location){ 

    angular.forEach($scope.locations, function(location_no) {
      location_no.selected = false;

    });
    $scope.location_no = location;
    $scope.location_no.selected = true;

    $scope.selectedLocation= $scope.location_no.location;

  };


 

}]);
