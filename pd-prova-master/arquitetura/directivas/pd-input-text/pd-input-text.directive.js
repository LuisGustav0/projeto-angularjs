(function () {
  'use strict';

  angular.module( 'pdApp' )
    .directive( 'pdInputText', pdInputText );

  function pdInputText() {
    return {
      restrict: 'E',
      templateUrl: 'arquitetura/directivas/pd-input-text/pd-input-text.html',
      scope: {
        label: '@',
        placeholder: '@',
        tipoInputText: '@',
        ngModel: '=',
        colspan: '@'
      },
      link: link
    };
    function link( scope, element, attrs ) {
      scope.idInputText = 'pdInputText' + scope.$id;
      scope.classColspan = 'col-md-' + (scope.colspan || '3');
      scope.typeInputText = (scope.tipoInputText || 'text');
    }
  }
})();