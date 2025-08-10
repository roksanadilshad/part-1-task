function repeatedItem(numbers, find){
    let arr = 0;
    for(const num of numbers){
        // if(numbers.includes(find) && num === find)
        if(num === find){
            arr++;
        }
    }
    return arr;
}
const numbers =  [5,6,11,12,98, 5];
let find = 5;
console.log(repeatedItem(numbers, find));
const number =  [5,6,11,12,98, 5];
let fin = 25;
console.log(repeatedItem(number, fin));