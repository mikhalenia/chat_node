This is the chat server which works using WebSockets and Redis as storage.

Run command chatServer.js --help for read information about starting server.

You have to set Redis config(host,port,db,ttl for messages, ttl for logins) and listener as in the Example:
{
	"listen": {
		"jsonrpc":"127.0.0.1:8080"
	},
	"redis": {
		"host": "127.0.0.1",
		"port": 6379,
		"db": 0,
		"ttl_msg": 3600,
		"ttl_user": 7200
	}
}

Connect to the Server using WebSocket and send commands by jsonrpc protocol.

You can send three commands:
1. setName - set user name
2. subscribe - join to the channel
3. msg - send a message