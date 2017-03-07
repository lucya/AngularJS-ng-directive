var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.callbackFn = function(){
      console.debug('callbackFn!!')
  }
  
});
app.directive('fileAttatch', function(){
    return {
        restrict : 'A',
        scope : {
            callback: '&'
        },
        link : function(scope, element, attrs, ctrl){
            element.bind('click', function(){
                console.debug('click');
                
                ctrl.upload();
            })
        },
        controller: function($scope){
            var vm = this;
            vm.upload = function(){
                console.debug('upload', $scope.callback);
                
                if($scope.callback) {
                    $scope.callback();
                }
            }
        }
    }
})