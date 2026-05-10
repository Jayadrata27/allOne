//in reduce always use initialize
// let arr=[10,20,30,40,50];
// let result=arr.reduce((acc,curr)=>{
//     acc=acc+curr;
//     return acc;
// },0)
// console.log(result);


// let arr=[10,20,30,40,50];
// let result=arr.reduce((acc,curr)=>acc+curr,0);
// console.log(result);



// let obj={
//     name:"Joy",
//     age:21
// }
// let result=obj.hasOwnProperty("name");
// console.log(result);



// let obj={
//     name:"Joy",
//     age:21,
//     orange:1
// }
// let curr="orange";
// if(obj.hasOwnProperty(curr)){
//     obj[curr]++;
// }
// console.log(obj);



// count the fruits by using reduce
// let arr=["orange","apple","banana","orange","apple","banana","orange","grapes"];
// let result=arr.reduce((acc,curr)=>{
//    if(acc.hasOwnProperty(curr)){
//       acc[curr]++;
//    }
//    else{
//     acc[curr]=1;
//    }

//    return acc;

// },{})
// console.log(result);



// let arr=["orange","apple","banana","orange","apple","banana","orange","grapes"];
// let result=arr.reduce((acc,curr)=>{
//     acc.hasOwnProperty(curr)? acc[curr]++ : acc[curr]=1;
//     return acc;
// },{})
// console.log(result);





// set: Unique value
// let set1=new Set([10,20,20,10,30,40,50]);
// console.log(set1);

// let set1=new Set();
// set1.add(4);    //add function
// set1.add(6);
// set1.add("Rohit");
// set1.add(30);
// console.log(set1);
// set1.delete(6);     //delete function
// console.log(set1);
// console.log(set1.size);     //check size



// has
// let user_id=new Set(["rohit_negi","mohit_91","ravi93","chavi90","sumit9"]);
// let new_user="rohit_negi";
// console.log(user_id.has(new_user));

// user_id.clear();
// console.log(user_id);



// array to set
// let arr=[10,30,20,10,40,50,30];
// let set1=new Set(arr);
// console.log(set1);


//array to set to array
// let arr=[10,30,20,10,40,50,30];
// let set1=new Set(arr);
// let set2=[...set1];
// console.log(set2);



// union
// let set1=new Set([10,20,30,40,50]);
// let set2=new Set([10,20,70,40]);
// let set3=new Set([...set1,...set2]);
// console.log(set3);



//intersection
// let set1=new Set([10,20,30,40,50]);
// let set2=new Set([10,20,70,40]);
// let set3=[...set1].filter((num)=>set2.has(num));
// console.log(set3);




// Map: key value pair : Key should be unique
// let map1=new Map();
// map1.set(3,90);
// map1.set("Rohit",45);
// map1.set(20,"Joy");
// console.log(map1);

// map1.delete(3);             //delete
// console.log(map1);

// console.log(map1.has("Rohit"));     //has

// console.log(map1.size);       //size

// map1.clear();
// console.log(map1);       //clear





// let map1=new Map([
//     [4,"Rohit"],["mohan","rohan"],[30,9],[63,78]
// ]);
// console.log(map1);

// for([key,value] of map1){
//     console.log(key,value);
// }







