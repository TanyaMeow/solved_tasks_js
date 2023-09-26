// DONE
'use strict';

// Использование функции из задачи 8

function asyncTimeout(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeout)
    });
}

async function promiseStack(value) {
    for (const func of value) {
        await func();
    }
}

promiseStack([
    () => asyncTimeout(4000).then(() => console.log(1)),
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(3000).then(() => console.log(4)),
]).then();