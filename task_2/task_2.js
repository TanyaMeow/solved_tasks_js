// DONE
'use strict';

function changeValue(keys, newValue, object) {

    if (keys.length === 1) {
        object[keys[0]] = newValue;
        return;
    }

    // FIXME мутации и переопределения аргументов не допустимы (DONE)
    changeValue(keys.slice(1), newValue, object[keys[0]]);
}

changeValue(
    ['user', 'work', 'post'],
    'programmer',
    {
        user: {
            name: 'Tanya',
            work: {
                post: 'jobless'
            }
        }
    }
);