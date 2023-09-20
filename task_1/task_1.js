'use strict';

function shallowEquals(object1, object2) {
    let keyArray1 = Object.keys(object1);
    let keyArray2 = Object.keys(object2);

    if (object1 === object2) {
        return false;
    }

    if (keyArray1.length !== keyArray2.length) {
        return false;
    }

    for (let key of keyArray1) {
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
