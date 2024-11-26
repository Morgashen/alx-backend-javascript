import express from 'express';
import router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Current directory:', __dirname);
console.log('Full path to server.js:', __filename);
console.log('Arguments:', process.argv);

const app = express();
const PORT = 1245;
app.locals.databaseFile = process.argv[2]; // Pass database file path as an argument
app.use('/', router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default app;
