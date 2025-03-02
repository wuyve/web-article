// 反转字符串

// 方法一：利用数组的reverse()方法
function reverseString (str) {
    return str.split('').reverse().join('');
}

// 方法二：利用for循环逆序拼接字符串
function reverseString (str) {
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

// 方法三：利用递归实现字符串的反转
function reverseString (str) {
    if (str.length === 1) {
        return str;
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}

// 方法四：利用数组的reduce()方法逆序拼接字符串
function reverseString(str) {
    // 将字符串转换为数组，然后使用数组的reduce()方法逆序拼接字符
    return str.split("").reduce(function(prev, current) {
      return current + prev;
    }, "");
  }