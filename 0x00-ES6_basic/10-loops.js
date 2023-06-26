export default function appendToEachArrayValue(array, appendString) {
  const arrayNew = [];
  for (const value of array) {
    const idx = array.indexOf(value);
    arrayNew[idx] = appendString + idx;
  }

  return arrayNew;
}
