/**
 * Created by LUIS GUSTAVO on 20/11/2016.
 */

angular.module( 'pdApp' ).controller( 'VizualizaroBairroController', VizualizaroBairroController );

VizualizaroBairroController.$inject = [ '$scope', '$rootScope', '$state' ];

function VizualizaroBairroController( $scope, $rootScope, $state ) {

  $scope.entidadeSelecionada = $rootScope.entidadeSelecionada;

  $scope.voltarParaCadastro = voltarParaCadastro;

  function voltarParaCadastro(){
    $state.go( 'cadastroBairro' );
  };
};
