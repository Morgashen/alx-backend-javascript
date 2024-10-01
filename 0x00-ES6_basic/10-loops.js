export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    const value = array[idx];
    newArray.push(appendString + value);
  }
  return newArray;
}
