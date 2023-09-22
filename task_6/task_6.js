'use strict';

class MySet {
    constructor(array) {
        if (!Array.isArray(array)) { throw 'Переданное значение не поддерживается!' }

        this._array = array;

        this.size = array.length;
    }

    add(value) {
        if (!this._array.includes(value)) {
            this._array.push(value);
            this._setSize();
        }
    }

    has(value) {
        return this._array.includes(value);
    }

    delete(value) {
        for (let i = 0; i < this._array.length; i++) {
            if (value === this._array[i]) {
                this._array.splice(i, 1);
            }
        }
    }

    clear() {
        this._array = [];
        this._setSize();
    }

    _setSize() {
        this.size = this._array.length;
    }
}

let le = new MySet([1, 2, 3, 4, 5]);
console.log(le);