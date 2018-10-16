(function () {
  'use strict';

  angular
    .module( 'pdApp' )
    .controller( 'IndexController', IndexController );

  IndexController.$inject = [ '$state' ];

  /* @ngInject */
  function IndexController( $state ) {
    var indexCtrl = this;

    indexCtrl.abrirPagina = abrirPagina;

    function abrirPagina( nomeState ) {
      $state.go( nomeState );
    }
  }
})();

