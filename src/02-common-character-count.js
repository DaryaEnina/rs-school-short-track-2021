function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      res += 1;
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    }
  }
  return res;
}
module.exports = getCommonCharacterCount;
