const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

let users = [
    { name: 'Bob', gender: 'male'},
    { name: 'Alice', gender: 'female'},
    { name: 'Charles', gender: 'male'}
];
let res = users.filter(user => user.gender == 'male' );
console.log(res);


