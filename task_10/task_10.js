"use strict";

// Использование функции из задачи 8

function asyncTimeout(timeout) {
    console.log('FIRST: ' + timeout)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeout)
    });
}

function promiseStack(value, count = 0) {
    const stack = [];

    if (value.length === 0) {
        return 1;
    }

    for (let i = 0; i < count; i++) {
        if (value[i] === undefined) {
            return;
        }

        stack.push(value[i]());
        console.log(stack);
    }

    let newValue = value.slice(count);

    Promise.all(stack).then(() => {
        promiseStack(newValue, count);
    });
}

promiseStack([
    () => asyncTimeout(4000).then(() => console.log(1)),
    () => asyncTimeout(4000).then(() => console.log(1)),
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(3000).then(() => console.log(4)),
], 2);