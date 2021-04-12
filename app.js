    function perfectNum(myNum){
        let sum = 0;
        for(let i = 1; i < myNum; i++){
            if(myNum % i == 0){
                sum += i;
            }    
        }
        if (sum == myNum){
            return sum;
        }
        return null;
        
    }
    let res = [];
   for(let k = 1; k <= 1000; k++){
     
     if(perfectNum(k) != null){
         res.push(k);
     }
   }
   console.log(res); // output =[6, 28, 496]

