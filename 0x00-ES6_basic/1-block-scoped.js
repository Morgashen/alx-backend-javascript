export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
    // Use task and task2 to avoid unused variable warnings
    console.log(task, task2);
  }

  return [task, task2];
}
