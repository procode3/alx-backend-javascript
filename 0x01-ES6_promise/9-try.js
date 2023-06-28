export default function guardrail(mathFunction) {
  const queue = [];
  const message = 'Guardrail was processed';
  try {
    const output = mathFunction();
    queue.push(output);
    queue.push(message);
  } catch (err) {
    queue.push(err);
    queue.push(message);
  }

  return queue;
}
