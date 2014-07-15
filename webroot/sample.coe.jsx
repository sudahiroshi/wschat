import "js.jsx";
import "js/web.jsx";
import "nylon.client.jsx";
import "nylon.coe.jsx";

class _Main {

  static function main( args: string[] ): void {
//    var connectid = dom.id( "connectId" );
    var nl = new nylon();
    var co = new coe( 'ws://localhost:8000/chat' );

    var mes = function( data: Map.<variant> ): void {
      var message = data["mes"] as string;
      log message;
//      dom.id( 'receiveMsg' ).append( message );
//      dom.id( 'receiveMsg' ).appendChild( Document.createTextNode( message ) );
//      dom.id( 'receiveMsg' ).appendChild( dom.createElement( 'br' ) );
    };
    nl.on( "chat", mes );
    var msg = "test";

    co.onconnect( function( e:Event ) : void {
      var data = {}: Map.<variant>;
      data["mes"] = msg;
      nl.emit( "broadcast|chat", data );
    });
  }
}
