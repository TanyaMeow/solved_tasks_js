// DONE
'use strict';

const form = document.getElementById('form1');
const firstName = form.elements.fname;
const lastName = form.elements.lname;
const userData = document.querySelector('.data');

function getFormvalue(event) {
    event.preventDefault();

    userData.textContent = firstName.value + ` ${lastName.value}`;
}

form.onsubmit = getFormvalue;