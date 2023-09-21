'use strict';

function pipe(...value) {
    return () => {
        let result = {};

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

console.log(fillUser());