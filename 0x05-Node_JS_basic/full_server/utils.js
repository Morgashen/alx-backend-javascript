import fs from 'fs/promises';

export async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    if (lines.length <= 1) return {}; // Only header or empty

    const students = lines.slice(1); // Skip header
    const fields = {};

    for (const line of students) {
      const [firstname, , , field] = line.split(','); // Destructure columns
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstname);
    }

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
