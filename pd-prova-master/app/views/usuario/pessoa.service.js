(function () {
  'use strict';

  angular
    .module( 'pdApp' )
    .service( 'PessoaService', PessoaService );

  PessoaService.$inject = [ 'PdCrudService', '$q' ];

  /* @ngInject */
  function PessoaService( PdCrudService, $q ) {
    var pessoaSrv = this;
    pessoaSrv.getPdCrudService = getPdCrudService;
    pessoaSrv.getListaPessoas = getListaPessoas;

    function getPdCrudService() {
      return new PdCrudService( 'CadastroUsuarioController' );
    }

    function getListaPessoas() {

      return null;
    }
  }

})();