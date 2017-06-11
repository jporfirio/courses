(function(){

  angular.module('conditionalDisplayApp', [])
  .controller('displayController', displayController);

  function displayController(){
    this.alwaysShow = true;
    this.alwaysHide = true;
    this.display = true;
    this.toggle = function(){
      this.display = !this.display;
    }
  }

})();
