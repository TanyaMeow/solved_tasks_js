'use strict';

function pipe(...value) {
    return (result) => {
        for (let i = value.length - 1; i >= 0; i--) {
            result = value[i](result);
        }

        return result;
    }
}

const fillUser = pipe (
    (user) => ({ ...user, lastName: "Pass" }),
    (user) => ({ ...user, age: 29 }),
    (user) => ({ ...user, city: "Boston" }),
);

const calculateAnyNumber = pipe (
  (number) => number + 2,
  (number) => number * 2,
  (number) => (number / 2) - 2
);

console.log(fillUser({}));
// FIXME https://i.imgur.com/G82Q3eC.png (DONE)
console.log(calculateAnyNumber(9));