const isPalindrome = (str: string): boolean => {
  return str.split("").reverse().join("") === str;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
