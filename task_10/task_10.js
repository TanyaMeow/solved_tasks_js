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
        // FIXME зачем тут возвращать единицу?)
        return 1;
    }

    for (let i = 0; i < count; i++) {
        // FIXME если мы случайно передадим в середине массива undefined, то функция прервется не выполнив все промисы
        if (value[i] === undefined) {
            return;
        }
        // FIXME это не гарантирует того, что функция дождется выполнения всех промисов в stack.
        //  Для этого нужно использовать await Promise.all и передать в нее массив из первых n функций
        stack.push(value[i]());
        // FIXME remove
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