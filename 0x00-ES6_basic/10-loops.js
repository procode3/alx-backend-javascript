export default function appendToEachArrayValue(array, appendString) {
  const arrayNew = [];
  for (const idx of array.keys()) {
    const value = array[idx];
    arrayNew[idx] = appendString + value;
  }

  return arrayNew;
}
