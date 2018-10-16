(function () {
  'use strict';

  angular
    .module( 'pdAppArquitetura' )
    .directive( 'pdInputCheckbox', pdInputCheckbox );

  /* @ngInject */
  function pdInputCheckbox() {
    return {
      restrict: 'E',
      templateUrl: 'arquitetura/directivas/pd-input-checkbox/pd-input-checkbox.html',
      scope: {
        label: '@',
        opcao: '@',
        ngModel: '=',
        colspan: '@'
      },
      link: link
    };

    function link( scope, element, attrs ) {
      scope.idInputCheckbox = 'pdInputCheckbox' + scope.$id;
      scope.classColspan = 'col-md-' + (scope.colspan || '3');
    }
  }
})();


