/**
 * Created by LUIS GUSTAVO on 12/11/2016.
 */

angular.module( 'pdApp' ).service( 'AlertService', AlertService );

function AlertService( toastr ) {
  this.success = sucess;
  this.error = error;
  this.info = info;
  this.warning = warning;

  function success( mensagem, titulo ) {
    titulo = titulo || 'Ok';
    toastr.success( mensagem, titulo );
  }

  function error( mensagem, titulo ) {
    titulo = titulo || 'Erro';
    toastr.error( mensagem, titulo );
  }

  function info( mensagem, titulo ) {
    titulo = titulo || 'Info';
    toastr.info( mensagem, titulo );
  }

  function alert( mensagem, titulo ) {
    titulo = titulo || 'Atenção!';
    toastr.warning( mensagem, titulo );
  }
}
