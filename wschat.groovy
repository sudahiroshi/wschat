def server = vertx.createHttpServer()
server.requestHandler { req ->
  def file = req.uri == "/" ? "/index.html" : req.uri
  println "webroot$file"
  req.response.sendFile "webroot$file"
}

def wsMap = [:] as java.util.concurrent.ConcurrentHashMap

server.websocketHandler { ws ->

  ws.dataHandler { data ->
    wsMap.each { k, v ->
	  if( k != ws.textHandlerID ) v.writeTextFrame( data.toString() )
	}
    println "message : ${data.toString()}"
  }

  ws.closeHandler {
    wsMap.remove( ws.textHandlerID )
	println "closed : ${ws.textHandlerID}"
  }
  if( ws.path != '/chat' ) {
    ws.reject()
	return
  }
  println "connect : ${ws.textHandlerID}"
  wsMap.put( ws.textHandlerID, ws )
}

server.listen( 8000 )
