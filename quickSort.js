

function quickSort(arr){
   if (!arr.length) return arr;

   let pivot= arr.shift();
   let left= arr.filter((x)=>x< pivot);
   let right= arr.filter((y)=>y> pivot);

   return [...quickSort(left), pivot, ...quickSort(right)];
}
