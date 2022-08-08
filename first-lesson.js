// function person(myName, myAge) {
//     return {
//         name: myName,
//         age: myAge

//     };

// };
// let person1 = person("Yura", 28);
// let person2 = person("Vova", 28);

// console.log(person1,person2);

// function num(num1, num2){
//     return num1 + num2;
// };
// console.log(num(2, 4))

let list = [1,2,3,4,5,6];
let list2 = new Array(1,2,3,4,5,6)

function newList(num){
    let nlist =[];
    for (x = 0; x < num.length; x++){
        if (!(num[x] % 2 == 0)){
           
            nlist.push(num[x])
            
        }
    
    }
    return nlist;
}
let x2 = newList(list2);
console.log(x2)


