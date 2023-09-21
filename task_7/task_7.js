'use strict';

function toObject(array) {
    return array.reduce((accumulator, obj) => {
        accumulator[obj['name']] = obj['value'];
        return accumulator;
    }, {})
}

console.log(toObject([
    { name: "width", value: 100 },
    { name: "height", value: 50 },
]))

function toArray(object) {
    let keys = Object.keys(object);
    let result = [];

    for (let key of keys) {
        result.push({
            name: key,
            value: object[key]
        })
    }

    return result;
}

console.log(toArray({ width: 100, height: 50 }))