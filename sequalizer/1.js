let n=7;
let arr = [];
for(let i =0;i<n;i++){
    arr[i]=1;
}
let newArr = [];
newArr.push(arr);
if(n%2==0){
    exit = n/2;
}else{
    exit=(n/2) +1
}
let i=0;
count=1;
while(arr.length>=exit){
    //console.log(arr.length)

    if(arr[arr.length-2]==1&&arr[arr.length-1]==1){

        arr.pop();
        console.log(arr);
        arr[i]=2;
        
        let tempArr = arr;
        // console.log(tempArr)
        count+=1;
        for(let j=0;j<=tempArr.length-2;j++){

            let temp =tempArr[i];
            tempArr[i] = tempArr[i+1]
            tempArr[i+1]=temp;
            count+=1;
            // console.log(tempArr)
           
        }
        i+=1
        }
        else{
            count+=1
            break;
        }
    }
    

console.log(count)
console.log(arr.length)