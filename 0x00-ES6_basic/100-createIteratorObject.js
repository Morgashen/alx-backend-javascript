export default function createIteratorObject(report) {
  const employees = [];

  // Collect all employees from each department
  for (const department in report.allEmployees) {
    employees.push(...report.allEmployees[department]);
  }

  // Return an iterator for the employees array
  return employees[Symbol.iterator]();
}
