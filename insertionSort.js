function insertionSort(array) {  //Time Complexity O(n^2), Space Complexity 0(1)
  for (let index = 1; index < array.length; index++) {
     let current= array[index];
     let j= index-1;

     while (j>-1 && current < array[j]) {
         array[j+1]=array[j];
         j--;
     }

     array[j+1]=current;
      
  }

  return array;
}


console.log(insertionSort([5,1,7,3,2,4,1]));