// 字符串中的第一个唯一字符

// 方法0: 暴力法
function firstUniqueChar(str) {
    if (str.length === 1) {
        return str;
    }
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        const newStr = str.slice(0, i) + str.slice(i + 1);
        if (newStr.indexOf(letter) === -1) {
            return letter;
        }
    }
    return null;
}

// 方法1：使用对象计数
function firstUniqueChar(s) {
    let charCount = {};
    
    // 填充字符计数对象
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // 查找第一个唯一字符
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return s[i];
        }
    }
    
    // 如果没有唯一字符，返回null或其他值
    return null;
} 

// 方法2：使用map计数
function firstUniqueChar(s) {
    let charCount = new Map();
    let indexMap = new Map(); // 存储第一次出现的位置
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        charCount.set(char, (charCount.get(char) || 0) + 1); // 计数
        if (!indexMap.has(char)) { // 只记录第一次出现的位置
            indexMap.set(char, i); // 设置索引位置
        } else if (charCount.get(char) > 1) { // 如果再次出现，移除索引以标记不是唯一字符的起始位置
            indexMap.delete(char); // 从索引映射中移除，表示不是唯一字符的起始位置了
        }
    }
    
    // 查找第一个唯一字符的索引，并返回对应的字符
    for (let [char, index] of indexMap) { // 这里可以直接使用for...of循环遍历Map的键值对，因为只需要找到第一个唯一字符即可退出循环。但为了完整性，这里还是展示了如何遍历。实际使用时可以直接在找到第一个唯一字符后返回。
        return char; // 由于我们只关心第一个唯一字符，所以找到后就返回。实际代码中可以提前退出循环。这里为了演示完整遍历过程。
    }
    return null; // 如果没有找到任何唯一字符，返回null。实际上由于上面的循环只会执行一次（除非有多个唯一字符），这里的null通常不会被返回。但为了完整性还是包括了这一行。实际使用时可以省略这一行。
}
