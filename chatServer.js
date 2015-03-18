#!/usr/bin/env node

var ChatCreator=require('chatserver');

var ChatServer=ChatCreator.getInstance();
ChatServer.init_jsonrpc();