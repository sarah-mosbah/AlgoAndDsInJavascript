function binarySearch(nums, target) {
    
   let low= 0 ; let high=nums.length-1;
    let mid =Math.ceil((low+high)/2);

   while (low <= high ) {
       if (nums[mid]> target) {
           high=mid-1;
           mid=Math.ceil((low+high)/2);
           console.log(mid)
       }else if (nums[mid]< target) {
        low=mid+1;
        mid=Math.ceil((low+high)/2);
       }else{
           return mid;
       }
   }

   return -1;


}
