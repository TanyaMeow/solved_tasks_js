'use strict';

// свой метод map

let arr = [ 1, 5, 7, 2, 9 ];

Array.prototype.myMap = function (callback) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i));
    }

    return newArray;
}

let result = arr.myMap((item, index) => {
    return {
        elem: item,
        index: index
    }
});

// свой метод filter

Array.prototype.myFilter = function (callback) {
    let newArray = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
            newArray.push(this[i]);
        }
    }

    return newArray;
}

let resul = arr.myFilter((item, index) => {
    return item > 2;
});
