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

async function promiseStack(value, count = 0) {
    // FIXME если мы случайно передадим в середине массива undefined, то функция прервется не выполнив все промисы
    // FIXME это не гарантирует того, что функция дождется выполнения всех промисов в stack.(DONE)
    //  Для этого нужно использовать await Promise.all и передать в нее массив из первых n функций (DONE)

    // FIXME remove (DONE)

    let newValue = value.filter((func) => func !== undefined);

    for (let i = 0; i < newValue.length; i+= count) {
        let stack = newValue.slice(i, i + count);

        await Promise.all(stack.map((func) => func()));
    }
}

promiseStack([
    undefined,
    () => asyncTimeout(4000).then(() => console.log(1)),
    () => asyncTimeout(4000).then(() => console.log(1)),
    undefined,
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(2000).then(() => console.log(2)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(1000).then(() => console.log(3)),
    () => asyncTimeout(3000).then(() => console.log(4)),
], 2).then();