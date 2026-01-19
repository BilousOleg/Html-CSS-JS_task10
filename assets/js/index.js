/**
 * Function gets users array, filters by inputAge and existence of age property and sorts it by their age properties
 * @param {array} users Array of objects to sort and filter
 * @param {number} inputAge Key value to filter array
 * @returns {array} Sorted and filtered array
 */
function filterUsers(users, inputAge) {
  return users
    .filter((u) => u.age > inputAge && Object.hasOwn(u, 'age'))
    .sort((u1, u2) => (u1.age < u2.age ? -1 : 1));
}

const users = [
  { name: 'John', age: 25, isMale: true },
  { name: 'Jane', age: 30, isMale: false },
  { name: 'Mike', age: 20, isMale: true },
  { name: 'Emily', age: 27, isMale: false },
  { name: 'Tom', age: 35, isMale: true },
  { name: 'Error1', isMale: false },
  { name: 'Error2', isMale: true },
];

// Перевірка роботи функції
const inputAge = +prompt('Введіть значення для сортування');
const filteredUsers = filterUsers(users, inputAge);

console.log(filteredUsers);
