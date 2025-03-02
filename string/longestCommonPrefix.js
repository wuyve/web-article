// 最长公共前缀
// 方法1: 逐位比较
function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (!prefix) return '';
    }
  }
  return prefix;
}

// 方法二：分治法
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    
    return divideAndConquer(strs, 0, strs.length - 1);
}
 
function divideAndConquer(strs, left, right) {
    if (left === right) {
        return strs[left];
    } else {
        let mid = Math.floor((left + right) / 2);
        let lcpLeft = divideAndConquer(strs, left, mid);
        let lcpRight = divideAndConquer(strs, mid + 1, right);
        return commonPrefix(lcpLeft, lcpRight);
    }
}
 
function commonPrefix(str1, str2) {
    let minLength = Math.min(str1.length, str2.length);
    for (let i = 0; i < minLength; i++) {
        if (str1[i] !== str2[i]) {
            return str1.substring(0, i);
        }
    }
    return str1.substring(0, minLength);
}


// 方法3：使用JavaScript的内置方法
function longestCommonPrefix(strs) {
    return strs.reduce((prev, curr) => {
        while (curr.indexOf(prev) !== 0) { // 当curr不以prev开头时，缩短prev的长度，直到找到最长公共前缀为止。
            prev = prev.substring(0, prev.length - 1); // 缩短prev的长度。如果prev为空字符串，则直接返回空字符串。
            if (!prev) return ""; // 如果prev为空，说明没有公共前缀。
        }
        return prev; // 返回当前的最长公共前缀。
    });
}