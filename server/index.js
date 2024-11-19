const concurrently = require('concurrently');

concurrently(
  [
    { command: 'npm start', name: 'server', cwd: './server' },
    { command: 'npm start', name: 'client', cwd: './client' }
  ],
  {
    prefix: 'name',
    killOthers: ['failure', 'success'],
    restartTries: 3,
  }
).catch((err) => {
  console.error('Error starting services:', err);
});

