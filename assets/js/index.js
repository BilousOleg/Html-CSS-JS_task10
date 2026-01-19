/**
 * Function gets users array, filters and sorts it by their age properties
 * @param {array} users Array of objects to sort and filter
 * @param {number} inputAge Key value to filter array
 * @returns {array | null} Sorted and filtered array if all required keys of objects exist. If not, returns null
 */
function filterUsers(users, inputAge) {
  return users.every((u) => Object.hasOwn(u, 'age'))
    ? users
        .filter((u) => u.age > inputAge)
        .sort((u1, u2) => (u1.age < u2.age ? -1 : 1))
    : null;
}

const users = [
  { name: 'John', age: 25, isMale: true },
  { name: 'Jane', age: 30, isMale: false },
  { name: 'Mike', age: 20, isMale: true },
  { name: 'Emily', age: 27, isMale: false },
  { name: 'Tom', age: 35, isMale: true },
  // { name: 'Error', isMale: false },
];

// Перевірка роботи функції
const inputAge = +prompt('Введіть значення для сортування');
const filteredUsers = filterUsers(users, inputAge);

console.log(filteredUsers);
