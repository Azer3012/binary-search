let arr=[];
let day=prompt("");
for (var i=1;i<=day;i++){
    arr.push(i);
    
};

console.log(arr)


function binarySearch(arr,number){
    let start=0;
    let end=arr.length-1;
    let step=1
    if(number<start||number>end){
        return false
    }
    while(start<=end){
        mid=Math.ceil((start+end)/2);
        if(arr[mid]>number){
            end=arr[mid]
        }else if(arr[mid]<number){
            start=arr[mid]
        }else if(arr[mid]===number){
            console.log(true)
            break;
        }
        step++;
    }
    return step
}
console.log(binarySearch(arr,30))