(function () {

  'use strict';

  var watchmenControllers = angular.module('watchmenControllers');

  /**
   * Add service
   */

  watchmenControllers.controller('ServiceEditCtrl',

    function (
        $scope,
        $state,
        $filter,
        $stateParams,
        Service,
        Groups,
        Report,
        usSpinnerService
    ) {

      function loading(){
        usSpinnerService.spin('spinner-1');
        $scope.loading = true;
      }

      function loaded(){
        usSpinnerService.stop('spinner-1');
        $scope.loading = false;
      }

      loading();

      $scope.editServiceTitle = "Update service";

      $scope.groups = Groups.get();

      Groups.get(function(res) {
           $scope.groups = res.groups;
      });

      $scope.service = Service.get({id: $stateParams.id}, function(){
        loaded();
      }, function(err){
        console.error(err);
        if (err.status === 401) {
          $state.go('services');
        }
        loaded();
      });

      $scope.save = function () {

        $scope.service.pingServiceOptions = {};
        $scope.service.pingServiceOptions[$scope.service.pingServiceName] = $scope.selectedPingServiceOptions;

        console.log($scope.service)

        $scope.service.$save(function () {
          Report.clearCache();
          $state.go('services');
        }, function(response){
          console.error(response);
          if (response && response.data && response.data.errors) {
            $scope.serviceAddErrors = response.data.errors;
          }
        });
      };

      $scope.cancel = function () {
        $state.go('services');
      };

    });

})();
