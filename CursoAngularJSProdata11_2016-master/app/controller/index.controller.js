/**
 * Created by LUIS GUSTAVO on 12/11/2016.
 */

angular.module( 'pdApp' ).controller( 'IndexController', IndexController );

function IndexController( $scope ) {
    $scope.nome = 'Luis';
    $scope.sobrenome = 'Gustavo';
    $scope.nomeCompleto = $scope.nome + ' ' + $scope.sobrenome;
    $scope.ola = ola;

    function ola() {
        alert( 'Olá' );
    }
}
