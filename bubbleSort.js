function bubbleSort(array) {
        let swaped= true;
        let i=0;
        while(swaped){
           swaped=false;
    
    
           for (let index = 0; index < array.length-1-i; index++) {
               if(array[index]> array[index+1]){
               
                   let temp= array[index];
                   array[index]= array[index+1];
                   array[index+1]=temp;
                   swaped=true;
    
               }
         
           }
           i++;
        }
    
        return array;
    }