const httpProxy = require('http-proxy');

httpProxy.createProxyServer({
  target:'http://192.168.10.10:3000'
}).listen(3000)
