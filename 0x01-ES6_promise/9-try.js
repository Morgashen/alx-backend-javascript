export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result); // Append the result to the queue
  } catch (error) {
    queue.push(error.message); // Append the error message to the queue
  } finally {
    queue.push('Guardrail was processed'); // Always append this message
  }
  return queue;
}
