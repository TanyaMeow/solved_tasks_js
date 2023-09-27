'use strict';

// свой метод map

let arr = [ 1, 5, 7, 2, 9 ];

Array.prototype.myMap = function (callback) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        // FIXME у callback-функции 3 аргумента (DONE)
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
}

let result = arr.myMap((item, index, arr) => {
    return {
        elem: item,
        index: index,
        array: arr
    }
});

// свой метод filter

Array.prototype.myFilter = function (callback) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        // FIXME у callback-функции 3 аргумента (DONE)
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }

    return newArray;
}

let resul = arr.myFilter((item, index, arr) => {
    return item > 2;
});
