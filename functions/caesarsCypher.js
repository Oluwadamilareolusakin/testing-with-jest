const convertToNumber = (char) => char.charCodeAt(0);
const convertToChar = (num) => String.fromCharCode(num);
const caesar = (string, key) => {
  string = string.split('');
  let nums = [];
  let newNums = [];
  let result = [];

  string.forEach((char) => {
    nums.push(convertToNumber(char));
  })

  nums.forEach((num) => {
    let newNum = num;
    
    if (num >= 97 && num <= 122){
      newNum += key;
      if (newNum > 122){
        newNum = (newNum % 122) + 96;
      }
    }

    if (num >= 65 && num <= 90){
      newNum += key;
      if (newNum > 90){
        newNum = (newNum % 90) + 64
      } 
    }
  newNums.push(newNum);
});

  newNums.forEach((num) => {
    result.push(convertToChar(num));
  })

  result = result.join('');

  return result;
}


module.exports = caesar;