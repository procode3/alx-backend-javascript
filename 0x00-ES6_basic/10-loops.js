export default function appendToEachArrayValue(array, appendString) {
  const updatedArray = [];
  for (const value of array) {
    const idx = array.indexOf(value);
    updatedArray[idx] = appendString + idx;
  }

  return updatedArray;
}
