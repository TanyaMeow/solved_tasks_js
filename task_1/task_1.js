// DONE
'use strict';

function shallowEquals(object1, object2) {
    let keysArray1 = Object.keys(object1);
    let keysArray2 = Object.keys(object2);

    if (object1 === object2) {
        return false;
    }

    if (keysArray1.length !== keysArray2.length) {
        return false;
    }

    for (let key of keysArray1) {
        if (!(key in object2)) {
            return false;
        }
        if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}

shallowEquals({a: 1}, {a: 1});
