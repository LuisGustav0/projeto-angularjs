(function () {
  'use strict';

  angular
    .module( 'pdApp' )
    .controller( 'PesquisaController', PesquisaController );

  PesquisaController.$inject = [ 'AlertService' ];

  /* @ngInject */
  function PesquisaController( AlertService ) {
    var pesquisaCtrl = this;
    pesquisaCtrl.titulo = 'Pesquisa de Usuários';

    pesquisaCtrl.gridOptions = {
      columnDefs: [
        { name: 'Código', field: 'codigo', minWidth: 50 },
        { name: 'Nome', field: 'nome', minWidth: 230 },
        { name: 'Login', field: 'login', minWidth: 50 },
        { name: 'Email', field: 'email', minWidth: 50 },
        {
          name: '', field: 'evento',
          cellTemplate: 'app/template/grid/cell-template-eventos.html'
          , width: 80
        }
      ],
      data: 'pesquisaCtrl.listaUsuarios',
      enableColumnMenus: false
    };

    pesquisaCtrl.listaUsuarios = [
      { codigo: '1', nome: 'Luis Gustavo', login: 'luis_gustavo', email: 'luis.gustav0@live.com' }
    ];
  }
})();

