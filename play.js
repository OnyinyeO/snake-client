const { connect } = require('./client');
const { setupInput } = require('./client');

console.log('Connecting ...');
const connection = connect();
setupInput(connection);

const handleUserInput = function (key) {
  if (key === 'Ctrl + C') {
    process.exit(); //
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (key) => {
    handleUserInput(key, conn);
  });
};
