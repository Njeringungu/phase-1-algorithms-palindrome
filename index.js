function isPalindrome(word) {
  // Write your algorithm here
return word == word.split("").reverse().join("") ? true : false;
  }
  isPalindrome("abba") 
 


/* 
  Add your pseudocode here
*/
// reverse the input string 
// If the string is same as reversed return true 
// else return false
/*
  Add written explanation of your solution here
*/
//We use split to convert string into ann array.
//We use reverse so as to reverse all the letters in that array.
//we use join to convert the array back into a string.
//use tenary method

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
