function isPalindrome(word) {
  // Write your algorithm here
  const split = word.split('')
  const reverse = split.reverse()
  const join = reverse.join('')

  if (word === join) {
    return true
  } else if(word !== join) {
    return false
  }

}

/* 
  Add your pseudocode here
  1. assign split variable here with .split()
  2. assign reverse variable with split variable to reverse split
  3. assign join variable with reverse variable to rejoin

  if statement here
    if parameter is same as join variable
     return true
    if not 
     return false
*/

/*
  Add written explanation of your solution here
  1 method will split the word
  2 method will reverse the word
  3 method will rejoin the word, therefore reversed word

  then if statement will check if the word is palindrome

*/


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
