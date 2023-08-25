const fibs=(number)=>{
    if(number<0) return 'Please use positive integer'
    let array=[0,1];
    let a=0,b=1,c;
    for(let i=2;i<number;i++){
        c=a+b;
        a=b;
        b=c;
     array.push(b)
    }
   return array
}
console.log(fibs(10))

const fibsRec=(number,array=[0,1])=>{
if(number<0) return 'Please use positive integer'
    if(array.length>=number){
        return array
    }
    const nextFib=array[array.length-1]+array[array.length-2];
    array.push(nextFib);
    return fibsRec(number,array)
}
console.log(fibsRec(10))