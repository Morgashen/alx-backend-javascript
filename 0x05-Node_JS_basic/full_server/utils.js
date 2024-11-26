import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(err);
      }

      const result = {};
      const lines = data.trim().split('\n');
      const headers = lines.shift().split(',');

      const fieldIndex = headers.indexOf('field');
      const firstNameIndex = headers.indexOf('firstname');

      lines.forEach((line) => {
        const fields = line.split(',');
        const field = fields[fieldIndex];
        const firstName = fields[firstNameIndex];

        if (!result[field]) {
          result[field] = [];
        }
        result[field].push(firstName);
      });

      resolve(result);
    });
  });
};

export default readDatabase;
