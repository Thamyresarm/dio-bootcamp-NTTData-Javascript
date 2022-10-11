let N = parseInt(gets()); 

let arr = new Array(N); 

for (let i = 0; i < N; i++){ 

    arr[i] = parseInt(gets());
    
    if(arr[i] === 0){
      if((i+1) < N){
        arr[i+1] = 0;
        i++;  
      }  
      
    }

}    
 
print(arr);