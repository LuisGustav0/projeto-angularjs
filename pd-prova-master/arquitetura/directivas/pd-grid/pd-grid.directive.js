(function () {
  'use strict';

  angular
    .module( 'pdApp' )
    .directive( 'pdGrid', pdGrid );

  pdGrid.$inject = [];

  /* @ngInject */
  function pdGrid() {
    return {
      restrict: 'E',
      templateUrl: 'arquitetura/directivas/pd-grid/pd-grid.html',
      scope: {
        titulo: '@',
        service: '='
      },
      link: link
    };

    function link( scope, element, attrs ) {
      scope.idGrid = 'idGrid' + +scope.$id;
    }
  }

})();

