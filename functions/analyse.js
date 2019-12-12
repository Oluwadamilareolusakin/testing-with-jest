const analyse = (array) => {
  let min = array[0];
  let max = array[0];
  let average = 0;
  const length = array.length
  for (let i = 0; i < array.length; i++){
    if (array[i] < min) min = array[i];
    if (array[i] > max) max = array[i];
    average += array[i];
  }
  average = average/length
  return {
    min, max, average, length
  }
}

module.exports = analyse;