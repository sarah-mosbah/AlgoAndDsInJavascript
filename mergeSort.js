
function mergeSort(array) {
    if (array.length===1) return array;


    let mid= array.length/2;
    const left=array.splice(0,mid);
    return  merge(mergeSort(left),mergeSort(array));
}


function merge(left, right) {
    let sorted_arr=[];

    while (left.length && right.length) {
        if(left[0]>=right[0]){
            sorted_arr.push(right.shift());

        }else{
            sorted_arr.push(left.shift());

        }
    }
      
    return [...sorted_arr,...left,...right];
}