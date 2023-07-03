export default function cleanSet(mySet, str) {
  if (!str) {
    return '';
  }
  return Array.from(mySet).filter((item) => item.startsWith(str)).map((item) => item.slice(str.length)).join('-');
}
