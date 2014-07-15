import "js.jsx";
import "js/web.jsx";
import "nylon.client.jsx";

class coe {
  var ws : WebSocket;
  var nl : nylon;

  function constructor( url : string ) {
    this.ws = new WebSocket( url );
    this.nl = new nylon();

    this.ws.onmessage = function( e : Event ) : void {
      var me = e as MessageEvent;
      var data = JSON.parse( me.data as string ) as Map.<variant>;
      var keys = data["keywords"] as Array.<string>;
      var index = keys.indexOf( 'broadcast' );
      if( index != -1 ) {
        keys.splice( index, 1 );
      }
      this.nl.emit( keys, data );
    };

    var emitfunc = function( params: Map.<variant> ): void {
      var jsondata = JSON.stringify( params );
      this.ws.send( jsondata );
    };

    this.nl.on( "broadcast", emitfunc );
    this.nl.on( "server", emitfunc );
  }

  function onconnect( fn: function( :Event ): void ) : void {
    if( this.ws != null ) {
      this.ws.onopen = fn;
    }
  }

  function onclose( fn: function( :Event ) : void ) : void {
    this.ws.onclose = fn;
  }

  function close() : void {
    this.ws.close();
  }
}
