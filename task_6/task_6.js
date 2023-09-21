'use strict';

class MySet {
    constructor(array) {
        if (!Array.isArray(array)) { throw 'Переданное значение не поддерживается' }

        this.array = array;
        this.size = this.array.length;
    }

    add(value) {
        this.array.push(value);
        this._setSize();
    }

    has(value) {
        return this.array.includes(value);
    }

    delete(value) {
        for (let i = 0; i < this.array.length; i++) {
            if (value === this.array[i]) {
                this.array.splice(i, 1);
            }
        }
    }

    clear() {
        this.array = [];
        this._setSize();
    }

    _setSize() {
        this.size = this.array.length;
    }
}

let arr = new MySet([6, 8, 3, 9, 1]);

console.log(arr);
console.log(arr.size);
console.log(arr.has(7))
arr.add(7);
console.log(arr);
console.log(arr.has(7))
console.log(arr.size);
arr.delete(6);
console.log(arr);
arr.clear();