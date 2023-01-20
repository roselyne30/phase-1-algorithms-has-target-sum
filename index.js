function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const numberAdd = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
     (array[j] === numberAdd) 
      return true;
      }
    }
    return false;
  }

/* 
  Write the Big O time complexity of your function here
*/
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    // n steps (depending on the length of the input array)
    const numberAdd = target - array[i];
    for (let j = i+1; j<array.length; j++) {
       // n * n steps (nested loop!)
     if(array[j] === numberAdd) 
      return true;
      }
    }
    //1 step
    return false;
  }
/* 
  Add your pseudocode here
*/
'get numbers that when added together equate the target number'
'iterate for the remaining number'
'check if the remaining number adds to target'
/*
  Add written explanation of your solution here
*/
'I need to get numbers that when added together equate the target number, iterate for the remaining number and check if the remaining number adds to target'
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
