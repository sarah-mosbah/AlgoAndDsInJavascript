function selectionSort(array) { //110,150,2
  for (let i = 0; i < array.length; i++) {
      let minIndex=i;
      
      for (let j = i+1; j < array.length; j++) {
          if (array[minIndex]> array[j]) {
              minIndex=j;
          }        
      }

      let tmp=array[i];
      array[i]=array[minIndex];
      array[minIndex]=tmp;
      
  }

  return array;
}

 console.log(selectionSort([5,3,55,47,1,2,5,17,88,1025,44,4,5]));


console.log(selectionSort([110,150,2]))