(function () {
  'use strict';

  angular
    .module( 'pdApp' )
    .controller( 'CadastroUsuarioController', CadastroUsuarioController );

  CadastroUsuarioController.$inject = [ 'PdCrudService', 'AlertService' ];

  /* @ngInject */
  function CadastroUsuarioController( PdCrudService, AlertService ) {
    var cadastroUsuarioCtrl = this;

    cadastroUsuarioCtrl.tiposUsuario = [
      { codigo: 1, descricao: 'Normal' },
      { codigo: 2, descricao: 'Supervisor' }
    ];

    cadastroUsuarioCtrl.pdCrudService = getPdCrudService();
    cadastroUsuarioCtrl.pdCrudService.onAntesSalvar = onAntesSalvar;

      function getPdCrudService() {
      return new PdCrudService( 'CadastroUsuarioController' );
    }

    function onAntesSalvar() {
      AlertService.info( 'Evento onAntesSalvar()' );

      return;
    };
  }
})();

