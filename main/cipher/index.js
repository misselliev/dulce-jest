function cipher(str) {
  var decipher = '';
  for (let i = 0; i < str.length; i += 1) {
    let charNum = str[i].charCodeAt();
    if (charNum >= 65 && charNum <= 77) {
      decipher += String.fromCharCode(charNum + 1);
    } else if (charNum >= 78 && charNum <= 90) {
      decipher += String.fromCharCode(charNum - 1);
    } else if (charNum >= 97 && charNum <= 109) {
      decipher += String.fromCharCode(charNum + 1);
    } else if (charNum >= 110 && charNum <= 122) {
      decipher += String.fromCharCode(charNum - 1);
    } else {
      decipher += String.fromCharCode(charNum);
    }
  }
  return decipher;
}
// 65-90 uppercase 97 - 122 lowercase

module.exports = cipher;
