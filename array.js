for(const ele of inumArray){
console.log(ele);
}



//Array Method
inumArray.forEach(ele=>console.log(ele))



let result=inumArray.filter(ele=>ele>4)
console.log(result);



let result2=inumArray.map(ele=>ele*2)
console.log(result2); [8,10,12,14,4,16]



// spread operator(...) is used to unpack an array



const arr1=[3,4,5]
const arr2=[11,arr1]      //--> [11,[3,4,5]]
const arr2=[11,...arr1]   //--> [11,3,4,5]
console.log(arr2);



console.log(Math.min(...arr2));



//destructing an array
const days=['mon','tue','wed','thurs']
let [day1,day2,,day4]=days
//let day1=days[0];
console.log(`${day1} ${day2} ${day4}`);