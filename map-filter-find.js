const numbers = [ 2, 3, 4, 6, 10, 8, 9];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result)
// }

// function square_0(element){
//     return element * element
// }

// const square_1 = element => element * element;
// const square_2 = x => x * x;



// numbers.map(function (element, index, array){
//     console.log(element, index, array);
// })


// const result =  numbers.map(function (element){
//     return element * element;
// })
// console.log(result)


// const result =  numbers.map(x => x * x)
// console.log(result)

// const filter_result = numbers.filter(x => x > 5 && x < 9);
// console.log(filter_result);

const find_num = numbers.find(x => x < 3);
console.log(find_num)