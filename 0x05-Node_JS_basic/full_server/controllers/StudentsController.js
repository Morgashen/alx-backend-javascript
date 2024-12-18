import readDatabase from '../utils.js';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.app.locals.databaseFile);
      let responseText = 'This is the list of our students\n';
      const fields = Object.keys(students).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

      fields.forEach((field) => {
        const names = students[field];
        responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });

      res.status(200).send(responseText.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (!['CS', 'SWE'].includes(major)) {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(req.app.locals.databaseFile);
      const names = students[major] || [];
      res.status(200).send(`List: ${names.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
