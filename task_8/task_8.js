'use strict';

function asyncTimeout(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, timeout)
    });
}

asyncTimeout(1000).then(() => console.log(2));