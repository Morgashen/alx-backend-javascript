import { readDatabase } from '../utils.js';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databasePath = req.app.get('databasePath');
      const fields = await readDatabase(databasePath);

      let response = 'This is the list of our students\n';
      const sortedFields = Object.keys(fields).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      sortedFields.forEach((field) => {
        response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const databasePath = req.app.get('databasePath');
      const fields = await readDatabase(databasePath);

      const students = fields[major] || [];
      res.status(200).send(`List: ${students.join(', ')}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
