'use strict';

function changeValue(keys, newValue, object) {

    if (keys.length === 1) {
         return object[keys[0]] = newValue;
    }
        object = object[keys[0]];
        keys = keys.slice(1);

        changeValue(keys, newValue, object);
}

changeValue(
    ['user', 'work', 'post'],
    'jobless',
    {
        user: {
            name: 'Tanya',
            work: {
                post: 'programmer'
            }
        }
    }
    );