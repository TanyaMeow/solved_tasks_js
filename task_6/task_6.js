'use strict';

class MySet {
    constructor(array) {
        if (!Array.isArray(array)) { throw 'Переданное значение не поддерживается!' }

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