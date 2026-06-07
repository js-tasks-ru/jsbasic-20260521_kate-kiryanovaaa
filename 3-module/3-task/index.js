function camelize(str) {
  let strArray = str.split("-");
  let newStr = '';

  if (strArray[0]) {
    newStr += strArray[0];
  }

  for (let i = 1; i < strArray.length; i++) {
    let newFirstSymbol = strArray[i][0].toUpperCase();
    let newStrArray = newFirstSymbol + strArray[i].slice(1);

    newStr += newStrArray;
  }

  return newStr;
}
