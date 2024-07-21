function foo(n) {
  if (n == 6) {
    let num = 2;
  }
  console.log(num); // num is 6 as it is declared in the global scope
}

var num = 6;
console.log(num);
foo(6);

// function foo(n) {
//   if (n == 6) {
//     let num = 2;
//   }
//   console.log(num); // num is not defined as it is declared in the block scope
// }

// const num = 6;
// console.log(num);
// foo(6);

// function foo(n) {
//   if (n == 6) {
//     var num = 2;
//   }
//   console.log(num); // num is 2 as it is declared in the function scope
// }

// const num = 6;
// console.log(num);
// foo(6);

//  In the above code, i is declared using var can be accessed outside the loop block.
// However, j declared using let cannot be accessed outside the block scope, and hence,
// the above code generates an error.
for (var i = 0; i < 3; i++) {
  console.log(i);
}
console.log("i outside the loop: ", i);

for (let j = 0; j < 3; j++) {
  console.log(j);
}

// console.log("j oustide the loop :", j);

function removeEven(arr) {
  if (!Array.isArray(arr)) {
    return arr;
  }

  const updatedArr = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element % 2 !== 0) {
      updatedArr.push(element);
    }
  }
  return updatedArr;
}

/**** SORTED ARRRAAAAYSSSSS */
/// Merge Two Arrays O(n + m) time and space

function mergeArrays(nums1, nums2) {
  const sortedArray = [];
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    const elem1 = nums1[p1];
    const elem2 = nums2[p2];

    if (elem1 < elem2) {
      sortedArray.push(elem1);
      p1++;
    } else {
      sortedArray.push(elem2);
      p2++;
    }
  }

  while (p2 < nums1.length) {
    const elem1 = nums1[p1];
    sortedArray.push(elem1);
    p1++;
  }
  while (p2 < nums2.length) {
    const elem2 = nums2[p2];
    sortedArray.push(elem2);
    p2++;
  }

  return sortedArray;
}

// In Place Merge Two Arrays O((n + m)* m) time and O(1) space

function mergeArrays(nums1, nums2) {
  let p1 = 0;
  let p2 = 0;

  while (p1 < nums1.length && p2 < nums2.length) {
    const elem1 = nums1[p1];
    const elem2 = nums2[p2];

    if (elem1 < elem2) {
      p1++;
    } else {
      nums1.splice(p1, 0, elem2);
      p2++;
      p1++;
    }
  }

  if (p2 < nums2.length) {
    const remainingElements = nums2.slice(p2);
    nums1.push(...remainingElements);
  }

  return sortedArray;
}

/** Given an array of integers, nums, and an integer target, k, 
 * find two numbers in the array that sum up to the target k.
There is exactly one solution for each input, and each element of the array can only be used once in the solution. 
The order of the returned elements does not matter.*/

/// O(n) time
function findSum1(nums, k) {
  let p1 = 0;

  while (p1 < nums.length) {
    const elem1 = nums[p1];
    const elem2 = k - elem1;

    if (nums.includes(elem2)) {
      return [elem1, elem2];
    }
    p1++;
  }
  return [];
}

/// O(n/2) time
function findSum2(nums, k) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === k) {
      return [nums[left], nums[right]];
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
}

/**You’re given an integer array, nums.
 * Return a resultant array product so that product[i]
 * is equal to the product of all the elements of nums except nums[i]. */

function findProduct(arr) {
  let left = 1;
  let products = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    let currentValue = 1;
    arr.slice(index + 1).forEach((element) => {
      currentValue *= element;
    });
    currentValue *= left;

    left *= element;
    products.push(currentValue);
  }
  // Replace this placeholder return statement with your code
  return products;
}

console.log(findProduct([0, -1, 2, -3, 4, -2]));

function findFirstUnique(nums) {
  for (let i = 0; i < nums.length; i++) {
    let pointer2 = 0;
    while (pointer2 < nums.length) {
      if (nums[pointer2] === nums[i] && i !== pointer2) {
        break;
      }

      pointer2++;
    }
    if (pointer2 === nums.length) {
      return nums[i];
    }
  }
}
