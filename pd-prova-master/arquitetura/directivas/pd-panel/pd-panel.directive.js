(function () {
  'use strict';

  angular
    .module( 'pdAppArquitetura' )
    .directive( 'pdPanel', pdPanel );

  /* @ngInject */
  function pdPanel() {
    return {
      restrict: 'E',
      templateUrl: 'arquitetura/directivas/pd-panel/pd-panel.html',
      transclude: {
        header: '?pdPanelHeader',
        body: '?pdPanelBody',
        footer: '?pdPanellFooter'
      },
      scope: {
        classPanel: '@',
        exibirFooter: '=',
        exibirHeader: '='
      },
      link: link
    };

    function link( scope, element, attrs ) {
      scope.classPanel = (scope.classPanel || 'panel-default');
    }
  }
})();




