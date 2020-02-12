let arr=[];
let day=prompt("");
for (var i=1;i<=day;i++){
    arr.push(i);
    
};

console.log(arr);


function binarySearch(arr,number){
    let start=0;
    let end=arr.length-1;
    let step=0
    if(number<start||number>end){
        return false
    }
    while(start<=end){
        mid=Math.floor((start+end)/2);
        step++;
        if(arr[mid]==number){
            return step;
        }else if(arr[mid]<number){
            start=mid+1
        }else if(arr[mid]>number){
            end=mid-1
            
        }
        
    }
    return step
}
console.log(binarySearch(arr,30))