import "js.jsx";

class nylonfunc {
	var fn: function( :Map.<variant> ): void;
	var obj: nylon;
	function constructor( func: function( :Map.<variant> ): void, object: nylon ) {
		this.fn = func;
		this.obj = object;
	}
}

class nylon {
	static var map = js.global["map"] as Map.<Array.<nylonfunc>>;

	function constructor() {
		if( js.global["map"] == null )	js.global["map"] = {}: Map.<Array.<nylonfunc>>;
	}
	function on( keyword: string, fn: function( :Map.<variant> ): void ): void {
		if( nylon.map[ keyword ] == null ){
			log "map - keyword is null";
			nylon.map[ keyword ] = [ new nylonfunc( fn, this ) ];
		} else {
			nylon.map[ keyword ].push( new nylonfunc( fn, this ) );
		}
	}
	function emit( keyword: string, params: Map.<variant> ): void {
		log nylon.map[keyword];
		var keys = keyword.split( "|" );
		this.emit( keys, params );
	}
	function emit( keys: Array.<string>, params: Map.<variant> ): void {
		if( nylon.map["keywords"] == null)	params["keywords"] = keys;
		keys.forEach( function( key: Nullable.<string> ): void {
			if( nylon.map[key] == null ) {
				log "Invarid keyword!";
			} else {
				nylon.map[key].forEach( function( element: nylonfunc ): void {
					if( element.obj != this ) {
						//Timer.setTimeout( ()-> { element.fn(params); }, 0 );
						element.fn( params );
					}
				});
			}
		});
	}
	function off( keyword: string, fn: function( :Map.<variant> ): void ): void {
		if( nylon.map[ keyword ] == null ){
			log "map - keyword is null";
		} else {
			var arr = nylon.map[keyword];
			for( var i=arr.length-1; i>=0; i-- ){
				log i;
				if( arr[i].obj == this && arr[i].fn == fn ){
					arr.splice( i, 1 );
				}
			}
			if( nylon.map[ keyword ].length == 0 )	nylon.map[ keyword ] = null;
		}
	}
}

class _Main {
	static function main( arts: string[] ): void {
		var f = function( x: Map.<variant> ): void {
			log "f was executed";
		};
		var g = function( x: Map.<variant> ): void {
			log "g was executed";
		};

		var a = new nylon();
		log "check A";
		a.on( "test", f );
		a.on( "test2", f );
		log nylon.map;	// for debug;
		log "check B";
		a.on( "test", g );
		log nylon.map;	// for debug;
		a.emit("test", {}:Map.<variant>);	// not execute

		var b = new nylon();
		log "check C";
		b.emit("test", null);	// execute
		b.emit("test2", null);	// execute
		a.off( "test", f );
		log "check D";
		log nylon.map;
		log "check E";
		b.emit("test|test2", null);
		log nylon.map;
	}
}

