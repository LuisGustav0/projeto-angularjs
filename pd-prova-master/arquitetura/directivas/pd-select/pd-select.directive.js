/**
 * Created by Prodata on 26/11/2016.
 */
(function () {
  'use strict';

  angular.module( 'pdApp' )
    .directive( 'pdSelect', pdSelect );

  function pdSelect() {
    return {
      restrict: 'E',
      templateUrl: 'arquitetura/directivas/pd-select/pd-select.html',
      scope: {
        label: '@',
        provider: '=',
        propriedadeValor: '@',
        propriedadeDescricao: '@',
        ngModel: '=',
        colspan: '@',
        ngRequired: '='
      },
      link: link
    };
    function link( scope, element, attrs ) {
      scope.idInputSelect = 'pdInputSelect' + scope.$id;
      scope.propriedadeValor = scope.propriedadeValor || 'codigo';
      scope.propriedadeDescricao = scope.propriedadeDescricao || 'descricao';
      scope.classColspan = 'col-md-' + (scope.colspan || '3');
    }

  }
})();