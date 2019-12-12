const reverse = (string) => {
  let result = '';
  string = string.split('');
  for (let i = string.length - 1; i >= 0; i--) result += string[i];
  return result;
}

module.exports = reverse;
