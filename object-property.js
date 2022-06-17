const students = [
    {id: 21, name: "Omar Sunny"},
    {id: 31, name: "Mannaaaaaa"},
    {id: 41, name: "Moyouri"},
    {id: 71, name: "DeepJol"}
];
// const studentName = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     studentName.push(element.name);
// }
// console.log(studentName);

const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id)
console.log(ids)
const bigger = students.filter(s =>s.id > 40);
console.log(bigger);
const biggerOne = students.find(s => s.id > 41);
console.log(biggerOne);