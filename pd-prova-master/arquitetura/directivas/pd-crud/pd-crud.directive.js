(function () {
  'use strict';

  angular
    .module( 'pdApp' )
    .directive( 'pdCrud', pdCrud );

  /* @ngInject */
  function pdCrud() {
    return {
      restrict: 'E',
      templateUrl: 'arquitetura/directivas/pd-crud/pd-crud.html',
      transclude: true,
      scope: {
        titulo: '@',
        service: '='
      },
      link: link
    };

    function link( scope, element, attrs ) {
      scope.formName = 'pdSuperCrudForm' + scope.$id;
    }
  }
})();