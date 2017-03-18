(function(){
  "use strict";
  angular.module("module1app", [])
  .controller("moduleController", moduleController);
  moduleController.$inject = ["$scope"];

  function moduleController($scope){
    $scope.list = "";
    $scope.message = "";
    $scope.boxClass = "";
    $scope.messageClass = "";
    
    function listSizeNoBlanks(string){
      var splitString = string.split(","); // splits the string into array of strings
      var emptyStrings = 0;
      splitString.forEach(function(item){
        item = item.trim(); // removes spaces before and after text
        if(item == ""){
         emptyStrings++;
        }
      });
      return splitString.length - emptyStrings;
    };
    
    $scope.checkNumber = function(){
      var length = listSizeNoBlanks($scope.list);
      // as the method name indicates, it does not consider empty or space-only strings
      if(length == 0){ // coulse use just !length but this should improve readability
        $scope.message = "Please enter data first";
        $scope.boxClass = "boxNoData";
        $scope.messageClass = "messageNoData";
      } else {
        if(length <= 3) {
          $scope.message = "Enjoy!";
        } else {
          $scope.message = "Too much!";
        }
        $scope.boxClass = "boxSuccess";
        $scope.messageClass = "messageSuccess";
      }
    };
  };
})();
