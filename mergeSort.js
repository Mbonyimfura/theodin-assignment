const merge=(left,right)=>{
    const result=[];
    leftIndex=0;
    rightIndex=0;

while(leftIndex<left.length && rightIndex<right.length){
    if(left[leftIndex]<right[rightIndex]){
        result.push(left[leftIndex]);
        leftIndex++;
    }else{
        result.push(right[rightIndex]);
        rightIndex++;
    }
}
return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}
const mergeSort=(array)=>{
    if(array.length<=1){
        return array
    }
    const middle=Math.floor(array.length/2);
    const left=array.slice(0,middle);
    const right=array.slice(middle);
    //Recursively sort and merge the left and right sub-arrays
   return merge(mergeSort(left),mergeSort(right))
}
const unsortedArray = [38, 27, 43, 3, 9, 82, 10,1];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);