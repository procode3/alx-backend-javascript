export default function promise(test) {
  return new Promise((resolve, reject) => {
    if (test) {
      resolve(true);
    }
    if (!test) {
      reject(Error('Failed'));
    }
  });
}
