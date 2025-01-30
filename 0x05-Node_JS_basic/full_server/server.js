import express from 'express';
import router from './routes/index.js';

const app = express();
const args = process.argv.slice(2);

// Validate CSV path argument
if (args.length === 0) {
  console.error('Usage: node server.js database.csv');
  process.exit(1);
}

// Set database path as a configuration
app.set('databasePath', args[0]);

// Use router
app.use('/', router);

// Start server
app.listen(1245, () => {
  console.log(`Server running on port 1245, using database: ${args[0]}`);
});

export default app;
