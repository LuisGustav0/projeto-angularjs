/**
 * Created by LUIS GUSTAVO on 20/11/2016.
 */

angular.module( 'pdApp' ).controller( 'CadastroBairroController', CadastroBairroController );

CadastroBairroController.$inject = [ '$scope', 'AlertService', '$state', '$rootScope' ];

function CadastroBairroController( $scope, AlertService, $state, $rootScope ) {

  $scope.salvar = salvar;
  $scope.editar = editar;
  $scope.excluir = excluir;
  $scope.vizualizar = vizualizar;
  $scope.limpar = limpar;

  $scope.gridOpcoes = {
    columnDefs: [
      { name: 'Nome do bairro', field: 'nomeBairro', minWidth: 230 },
      { name: 'Nome da cidade', field: 'nomeCidade', width: 230 },
      { name: 'Estado', field: 'estado', width: 100 },
      {
        name: '',
        field: 'excluir',
        cellTemplate: 'app/views/bairro/template/grid/cell-template-eventos.html',
        width: 150
      }
    ],
    data: 'listaBairros',
    enableColumnMenus: false
  };

  function salvar() {
    if( $scope.formBairro.$invalid ) {
      $scope.formBairro.nomeBairro.$setTouched();
      $scope.formBairro.nomeCidade.$setTouched();
      $scope.formBairro.estado.$setTouched();

      AlertService.error( 'Formulário inválido!' );
      return;
    }

    $rootScope.listaBairros.push( $rootScope.entidade );
    AlertService.success( 'Bairro foi salvo com sucesso!' );

    limpar();
  };

  function editar( linha ) {
    excluir( linha );
    $rootScope.entidade = linha;
  };

  function excluir( linha ) {
    var index = $scope.listaBairros.indexOf( linha );
    $rootScope.listaBairros.splice( index, 1 );
  };

  function vizualizar( linha ) {
    $rootScope.entidadeSelecionada = linha;
    $state.go( 'vizualizarBairro' );
  };

  function limpar() {
    $rootScope.entidade = {};
    $scope.formBairro.$setUntouched();

    angular.element( '#nomeBairro' ).focus();
  };
};
