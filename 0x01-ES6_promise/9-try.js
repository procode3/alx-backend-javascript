export default function guardrail(mathFunction) {
  const queue = [];
  const message = 'Guardrail was processed';
  try {
    const output = mathFunction();
    queue.push(output);
    queue.push(message);
  } catch (err) {
    queue.push(`Error: ${err.message}`);
    queue.push(message);
  }

  return queue;
}
