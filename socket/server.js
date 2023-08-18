import { createServer } from 'http';
import { createServer as _createServer } from 'sockjs';

const echo = _createServer({ prefix: '/echo' });
echo.on('connection', function (conn) {
  conn.on('data', function (message) {
    conn.write(message);
  });
  conn.on('close', function () {});
});

const server = createServer();
echo.installHandlers(server);
server.listen(9999, '0.0.0.0');
