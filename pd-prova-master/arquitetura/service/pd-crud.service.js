(function () {
  'use strict';

  angular
    .module( 'pdApp' )
    .service( 'PdCrudService', PdCrudService );

  PdCrudService.$inject = [ 'AlertService', 'localStorageService' ];

  /* @ngInject */
  function PdCrudService( AlertService, localStorageService ) {
    return function ( controller ) {
      var pdCrudSrv = this;
      pdCrudSrv.controller = controller;
      pdCrudSrv.entidade = {};

      pdCrudSrv.salvar = salvar;
      pdCrudSrv.limpar = limpar;
      pdCrudSrv.excluir = excluir;

      pdCrudSrv.onAntesSalvar = onAntesSalvar;
      pdCrudSrv.onAntesExcluir = onAntesExcluir;

      pdCrudSrv.obterChaveKeyAutoIncremento = obterChaveKeyAutoIncremento;

      pdCrudSrv.metodoSalvar = 'salvar';

      function salvar() {
        var isSalvar = onAntesSalvar();

        if( isSalvar === false ) {
          return;
        }

        localStorageService.set( obterChaveKeyAutoIncremento(), pdCrudSrv.entidade );

        pdCrudSrv.limpar();

        AlertService.success( 'Registro salvo com sucesso' );
      }

      function limpar() {
        pdCrudSrv.entidade = {};
      }

      function excluir() {
        var isExcluir = onAntesExcluir();

        if( isExcluir === false ) {
          return;
        }

        localStorageService.remove( pdCrudSrv.entidade.codigo );

        pdCrudSrv.limpar();

        AlertService.success( 'Registro excluído com sucesso' );
      }

      function onAntesSalvar() {
        return true;
      }

      function onAntesExcluir() {
        return true;
      }

      function obterChaveKeyAutoIncremento() {
        for( var key = 1; key <= 100; key++ ) {
          var chaveKey = 'usuario_' + key;
          var codigo = localStorageService.get( chaveKey );

          if( codigo == null ) {
            return chaveKey;
          }
        }
      }
    }
  }
})();
